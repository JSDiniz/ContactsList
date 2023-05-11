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
} from "@chakra-ui/react";
import * as yup from "yup";
import { SchemaOf } from "yup";
import { Input } from "../Form";
import EditInputPhone from "./EditInputPhone";
import EditInputEmail from "./EditInputEmail";
import { useAuth } from "../../contexts/Auth";
import { FaUser, FaCamera } from "react-icons/fa";
import { useContacts } from "../../contexts/Contact";
import { yupResolver } from "@hookform/resolvers/yup";
import { IContactsRes } from "../../interface/Contacts";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

interface IEditContactProps {
  isOpen: boolean;
  onClose: () => void;
  contact: IContactsRes;
}

export interface IEditContact {
  id: string | undefined;
  name: string | undefined;
  phones: IPhone[] | undefined;
  emails: IEmail[] | undefined;
  imageUrl: string | undefined;
}

interface IPhone {
  id: string | undefined;
  telephone: string | undefined;
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
        telephone: yup.string().optional(),
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
});

const EditContact = ({ isOpen, onClose, contact }: IEditContactProps) => {
  const { token } = useAuth();
  const { updateContact } = useContacts();

  const methods = useForm<IEditContact>({
    resolver: yupResolver(editContactSchemas),
  });

  const editContact: SubmitHandler<IEditContact> = (body: IEditContact) => {
    const data = {
      ...body,
      id: contact.id,
    };

    updateContact(data, token);
    onClose();
  };

  return (
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

              <EditInputEmail contact={contact} />

              <Input
                type={"url"}
                icon={FaCamera}
                label={"Adicione foto"}
                defaultValue={contact.imageUrl}
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
  );
};

export default EditContact;
