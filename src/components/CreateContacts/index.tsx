import {
  Text,
  Modal,
  Center,
  Button,
  VStack,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  Avatar,
} from "@chakra-ui/react";
import * as yup from "yup";
import { SchemaOf } from "yup";
import { Input } from "../Form";
import InputPhone from "./InputPhone";
import InputEmail from "./InputEmail";
import { useAuth } from "../../contexts/Auth";
import { FaUser, FaCamera } from "react-icons/fa";
import { useContacts } from "../../contexts/Contact";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useState } from "react";

interface ICreateContactsProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface IContact {
  name: string;
  phones: IPhone[];
  emails: IEmail[];
  imageUrl?: string | null | undefined;
  githubUrl?: string | null | undefined;
  linkedinUrl?: string | null | undefined;
  portfolioUrl?: string | null | undefined;
}

interface IPhone {
  phone: string;
}

interface IEmail {
  email: string;
}

const contactSchemas: SchemaOf<IContact> = yup.object().shape({
  name: yup.string().required("O campo é obrigatório."),
  phones: yup
    .array()
    .of(
      yup.object().shape({
        phone: yup.string().required("O campo é obrigatório."),
      })
    )
    .required(),
  emails: yup
    .array()
    .of(
      yup.object().shape({
        email: yup
          .string()
          .email("E-mail inválido.")
          .required("O campo é obrigatório."),
      })
    )
    .required(),
  imageUrl: yup.string().optional(),
  githubUrl: yup.string().optional(),
  linkedinUrl: yup.string().optional(),
  portfolioUrl: yup.string().optional(),
});

const CreateContacts = ({ isOpen, onClose }: ICreateContactsProps) => {
  const { createContacts } = useContacts();
  const [image, setImage] = useState("");
  const { token } = useAuth();

  const methods = useForm<IContact>({
    resolver: yupResolver(contactSchemas),
  });

  const handleCreateContacts: SubmitHandler<IContact> = (data: IContact) => {
    createContacts(data, token);
    onClose();
  };

  const previewImage = (e: any) => {
    setImage(e.target?.value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Contato</ModalHeader>
        <FormProvider {...methods}>
          <VStack
            as={"form"}
            onSubmit={methods.handleSubmit(handleCreateContacts)}
            w={"100%"}
          >
            <ModalBody w={"100%"} py={"0"}>
              <Center w={"100%"} mb={"2"}>
                <Avatar
                  size={"xl"}
                  bg={"transparent"}
                  border={"1px"}
                  borderColor={"orange.600"}
                  borderRadius={"10px"}
                  icon={<FaUser fontSize={"2.5rem"} color={"orange.600"} />}
                  src={image ? image : ""}
                />
              </Center>
              <Input
                type={"text"}
                label={"Name"}
                error={methods.formState.errors.name}
                {...methods.register("name")}
                placeholder={"Digite seu nome"}
              />
              {!methods.formState.errors.name && (
                <Text fontSize={"xs"} m={"1"} mb={"2"} color={"gray.600"}>
                  Ex: nome
                </Text>
              )}

              <InputPhone />
              <InputEmail />

              <Input
                icon={FaCamera}
                label={"Adicione avatar"}
                type={"url"}
                onChangeCapture={(e) => previewImage(e)}
                error={methods.formState.errors.imageUrl}
                {...methods.register("imageUrl")}
                placeholder={"Adicione sua foto"}
              />
              {!methods.formState.errors.githubUrl && (
                <Text fontSize={"xs"} m={"1"} mb={"2"} color={"gray.600"}>
                  Ex: data:image/jpeg;base86
                </Text>
              )}

              <Input
                icon={FaCamera}
                label={"Adicione github"}
                type={"url"}
                error={methods.formState.errors.githubUrl}
                {...methods.register("githubUrl")}
                placeholder={"Adicione sua foto"}
              />
              {!methods.formState.errors.githubUrl && (
                <Text fontSize={"xs"} m={"1"} mb={"2"} color={"gray.600"}>
                  Ex: https://github.com/name
                </Text>
              )}

              <Input
                icon={FaCamera}
                label={"Adicione linkedin"}
                type={"url"}
                error={methods.formState.errors.linkedinUrl}
                {...methods.register("linkedinUrl")}
                placeholder={"Adicione sua foto"}
              />
              {!methods.formState.errors.linkedinUrl && (
                <Text fontSize={"xs"} m={"1"} mb={"2"} color={"gray.600"}>
                  Ex: https://linkedin.com/in/name/
                </Text>
              )}

              <Input
                icon={FaCamera}
                label={"Adicione portfolio"}
                type={"url"}
                error={methods.formState.errors.portfolioUrl}
                {...methods.register("portfolioUrl")}
                placeholder={"Adicione sua foto"}
              />
              {!methods.formState.errors.portfolioUrl && (
                <Text fontSize={"xs"} m={"1"} mb={"2"} color={"gray.600"}>
                  Ex: https://portfolio.com
                </Text>
              )}
            </ModalBody>

            <ModalFooter>
              <Button variant={"toEnter"} w={"6.25em"} mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button type={"submit"} variant={"register"} w={"6.25em"}>
                Salvar
              </Button>
            </ModalFooter>
          </VStack>
        </FormProvider>
      </ModalContent>
    </Modal>
  );
};

export default CreateContacts;
