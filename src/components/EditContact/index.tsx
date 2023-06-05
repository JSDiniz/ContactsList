import {
  Text,
  Modal,
  VStack,
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  HStack,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import * as yup from "yup";
import { SchemaOf } from "yup";
import { Input } from "../Form";
import EditInputPhone from "./EditInputPhone";
import EditInputEmail from "./EditInputEmail";
import { useAuth } from "../../contexts/Auth";
import { FaUser, FaCamera, FaPlus } from "react-icons/fa";
import { useContacts } from "../../contexts/Contact";
import { yupResolver } from "@hookform/resolvers/yup";
import { IContactsRes } from "../../interface/Contacts";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import CreatePhone from "../CreatePhone";
import CreateEmail from "../CreateEmail";

interface IEditContactProps {
  isOpen: boolean;
  onClose: () => void;
  contact: IContactsRes;
}

export interface IEditContact {
  id?: string | undefined;
  name: string | undefined;
  phones: IPhone[] | undefined;
  emails: IEmail[] | undefined;
  imageUrl: string | undefined;
  githubUrl: string | undefined;
  linkedinUrl: string | undefined;
  portfolioUrl: string | undefined;
}

interface IPhone {
  id: string | undefined;
  phone: string | undefined;
}

interface IEmail {
  id: string | undefined;
  email: string | undefined;
}

const editContactSchemas: SchemaOf<IEditContact> = yup.object().shape({
  id: yup.string().optional(),
  name: yup.string().optional(),
  phones: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.string().optional(),
        phone: yup.string().optional(),
      })
    )
    .optional(),
  emails: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.string().optional(),
        email: yup.string().email("E-mail inválido.").optional(),
      })
    )
    .optional(),
  imageUrl: yup.string().optional(),
  githubUrl: yup.string().optional(),
  linkedinUrl: yup.string().optional(),
  portfolioUrl: yup.string().optional(),
});

const EditContact = ({ isOpen, onClose, contact }: IEditContactProps) => {
  const {
    isOpen: isOpenPhone,
    onClose: onClosePhone,
    onOpen: onOpenPhone,
  } = useDisclosure();

  const {
    isOpen: isOpenEmail,
    onClose: onCloseEmail,
    onOpen: onOpenEmail,
  } = useDisclosure();

  const { token } = useAuth();
  const { updateContact } = useContacts();

  const methods = useForm<IEditContact>({
    resolver: yupResolver(editContactSchemas),
  });

  const editContact: SubmitHandler<IEditContact> = (body: IEditContact) => {
    updateContact(contact.id, body, token);
    onClose();
  };

  return (
    <>
      {isOpenPhone && (
        <CreatePhone
          isOpenPhone={isOpenPhone}
          onClosePhone={onClosePhone}
          contactId={contact.id}
        />
      )}

      {isOpenEmail && (
        <CreateEmail
          isOpenEmail={isOpenEmail}
          onCloseEmail={onCloseEmail}
          contactId={contact.id}
        />
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar</ModalHeader>

          <FormProvider {...methods}>
            <VStack
              as={"form"}
              onSubmit={methods.handleSubmit(editContact)}
              w={"100%"}
            >
              <ModalBody w={"100%"}>
                <Input
                  type={"text"}
                  label={"Name"}
                  icon={FaUser}
                  defaultValue={contact.name}
                  error={methods.formState.errors.name}
                  {...methods.register("name")}
                  placeholder={"Digite seu nome"}
                />
                {!methods.formState.errors.name && (
                  <Text fontSize={"xs"} m={"1"} mb={"2"} color={"gray.600"}>
                    Ex: nome
                  </Text>
                )}

                <EditInputPhone contact={contact} />

                <HStack
                  as={"button"}
                  type={"button"}
                  _hover={{ color: "orange.600" }}
                  cursor={"pointer"}
                  onClick={onOpenPhone}
                  mb={"2"}
                >
                  <Icon as={FaPlus} fontSize={"xs"} />
                  <Text fontSize={"xs"}>Adicionar número de telefone</Text>
                </HStack>

                <EditInputEmail contact={contact} />

                <HStack
                  as={"button"}
                  type={"button"}
                  _hover={{ color: "orange.600" }}
                  cursor={"pointer"}
                  onClick={onOpenEmail}
                  mb={"2"}
                >
                  <Icon as={FaPlus} fontSize={"xs"} />
                  <Text fontSize={"xs"}>Adicionar novo email</Text>
                </HStack>

                <Input
                  type={"url"}
                  icon={FaCamera}
                  label={"Avatar"}
                  defaultValue={contact?.imageUrl!}
                  error={methods.formState.errors.imageUrl}
                  {...methods.register("imageUrl")}
                  placeholder={"Adicione sua foto"}
                />
                {!methods.formState.errors.imageUrl && (
                  <Text fontSize={"xs"} m={"1"} mb={"2"} color={"gray.600"}>
                    Ex: data:image/jpeg;base86
                  </Text>
                )}

                <Input
                  icon={FaCamera}
                  label={"Github"}
                  type={"url"}
                  defaultValue={contact?.githubUrl!}
                  error={methods.formState.errors.githubUrl}
                  {...methods.register("githubUrl")}
                  placeholder={"Adicione seu github"}
                />
                {!methods.formState.errors.githubUrl && (
                  <Text fontSize={"xs"} m={"1"} mb={"2"} color={"gray.600"}>
                    Ex: https://github.com/name
                  </Text>
                )}

                <Input
                  icon={FaCamera}
                  label={"Linkedin"}
                  type={"url"}
                  defaultValue={contact?.linkedinUrl!}
                  error={methods.formState.errors.linkedinUrl}
                  {...methods.register("linkedinUrl")}
                  placeholder={"Adicione seu linkedin"}
                />
                {!methods.formState.errors.linkedinUrl && (
                  <Text fontSize={"xs"} m={"1"} mb={"2"} color={"gray.600"}>
                    Ex: https://linkedin.com/in/name/
                  </Text>
                )}

                <Input
                  icon={FaCamera}
                  label={"Portfolio"}
                  type={"url"}
                  defaultValue={contact?.portfolioUrl!}
                  error={methods.formState.errors.portfolioUrl}
                  {...methods.register("portfolioUrl")}
                  placeholder={"Adicione seu portfolio"}
                />
                {!methods.formState.errors.portfolioUrl && (
                  <Text fontSize={"xs"} m={"1"} mb={"2"} color={"gray.600"}>
                    Ex: https://portfolio.com
                  </Text>
                )}
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Cancelar
                </Button>
                <Button type="submit" variant="ghost">
                  Salvar
                </Button>
              </ModalFooter>
            </VStack>
          </FormProvider>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditContact;
