import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { FaEnvelope, FaLock, FaUser, FaMobile, FaCamera } from "react-icons/fa";
import { useAuth } from "../../contexts/Auth";
import { Input } from "../Form";
import { useForm } from "react-hook-form";
import {
  IContactsRes,
  ICreateContacts,
  ICreateContactsUser,
} from "../../interface/Contacts";
import { yupResolver } from "@hookform/resolvers/yup";
import contactsSchemas from "../../schemas/Contacts";
import { useContacts } from "../../contexts/Contact";

interface IEditContact {
  isOpen: boolean;
  onClose: () => void;
  contact: IContactsRes;
}

const EditContact = ({ isOpen, onClose, contact }: IEditContact) => {
  const { user, token } = useAuth();
  const { updateContact } = useContacts();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateContacts>({
    resolver: yupResolver(contactsSchemas),
  });

  const editContact = (data: any) => {
    const { telephone, email } = data;
    const phones = [];
    const emails = [];

    phones.push({ telephone: telephone });
    emails.push({ email: email });

    Reflect.deleteProperty(data, "telephone");
    Reflect.deleteProperty(data, "email");

    const newData: ICreateContactsUser = {
      ...data,
      phones,
      emails,
      userId: user.id,
    };

    updateContact(contact.id, newData, token);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as={"form"} onSubmit={handleSubmit(editContact)}>
        <ModalHeader>Editar</ModalHeader>

        <ModalBody>
          <Input
            type={"text"}
            label={"Name"}
            defaultValue={contact.name}
            icon={FaUser}
            {...register("name")}
            placeholder={"Digite seu nome"}
          />

          <Input
            type={"email"}
            defaultValue={contact.emails[0].email}
            label={"Login"}
            icon={FaEnvelope}
            {...register("email")}
            placeholder={"Digite seu login"}
          />

          <Input
            icon={FaMobile}
            defaultValue={contact.phones[0].telephone}
            label={"Telefone"}
            type={"tel"}
            {...register("telephone")}
            placeholder={"Confirme suas telefone"}
          />

          <Input
            icon={FaCamera}
            label={"Adicione foto"}
            type={"url"}
            defaultValue={contact.imageUrl}
            {...register("imageUrl")}
            placeholder={"Adicione sua foto"}
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit" variant="ghost">
            Salvar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditContact;