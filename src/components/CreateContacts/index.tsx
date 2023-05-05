import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { FaEnvelope, FaUser, FaMobile, FaCamera } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Input } from "../Form";
import { ICreateContactsUser, ICreateContacts } from "../../interface/Contacts";
import { yupResolver } from "@hookform/resolvers/yup";
import contactsSchemas from "../../schemas/Contacts";
import { useAuth } from "../../contexts/Auth";
import { useContacts } from "../../contexts/Contact";

interface ICreateContactsProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateContacts = ({ isOpen, onClose }: ICreateContactsProps) => {
  const { user, token } = useAuth();
  const { createContacts } = useContacts();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateContacts>({
    resolver: yupResolver(contactsSchemas),
  });

  const handleCreateContacts = (data: ICreateContacts) => {
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

    createContacts(newData, token);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as={"form"} onSubmit={handleSubmit(handleCreateContacts)}>
        <ModalHeader>Contato</ModalHeader>
        <ModalBody>
          <Input
            type={"text"}
            label={"Name"}
            icon={FaUser}
            error={errors.name}
            {...register("name")}
            placeholder={"Digite seu nome"}
          />

          <Input
            type={"email"}
            label={"Email"}
            icon={FaEnvelope}
            error={errors.email}
            {...register("email")}
            placeholder={"Digite o email"}
          />

          <Input
            icon={FaMobile}
            label={"Telefone"}
            type={"tel"}
            error={errors.telephone}
            {...register("telephone")}
            placeholder={"Confirme suas telefone"}
          />

          <Input
            icon={FaCamera}
            label={"Adicione foto"}
            type={"url"}
            error={errors.imageUrl}
            {...register("imageUrl")}
            placeholder={"Adicione sua foto"}
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button type={"submit"} variant="ghost">
            Salvar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateContacts;
