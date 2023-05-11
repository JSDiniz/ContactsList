import {
  Text,
  Modal,
  Button,
  VStack,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalContent,
  ModalOverlay,
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

interface ICreateContactsProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface IContact {
  name: string;
  phones: IPhone[];
  emails: IEmail[];
  imageUrl: string | undefined | object;
}

interface IPhone {
  telephone: string;
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
        telephone: yup.string().required("O campo é obrigatório."),
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
});

const CreateContacts = ({ isOpen, onClose }: ICreateContactsProps) => {
  const { token } = useAuth();
  const { createContacts } = useContacts();

  const methods = useForm<IContact>({
    resolver: yupResolver(contactSchemas),
  });

  const handleCreateContacts: SubmitHandler<IContact> = (data: IContact) => {
    createContacts(data, token);
    onClose();
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
            <ModalBody w={"100%"}>
              <Input
                type={"text"}
                label={"Name"}
                icon={FaUser}
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
                id="imageUrl"
                icon={FaCamera}
                label={"Adicione foto"}
                type={"url"}
                error={methods.formState.errors.imageUrl}
                {...methods.register("imageUrl")}
                placeholder={"Adicione sua foto"}
              />
              {!methods.formState.errors.imageUrl && (
                <Text fontSize={"xs"} m={"1"} mb={"2"} color={"gray.600"}>
                  Ex: data:image/jpeg;base86
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
