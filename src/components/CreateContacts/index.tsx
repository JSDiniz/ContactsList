import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
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
          {!errors.name && (
            <Text fontSize={"xs"} m={"1"} mb={"2"} color={"gray.600"}>
              Ex: nome
            </Text>
          )}

          <Input
            type={"email"}
            label={"Email"}
            icon={FaEnvelope}
            error={errors.email}
            {...register("email")}
            placeholder={"Digite seu email"}
          />
          {!errors.email && (
            <Text fontSize={"xs"} m={"1"} mb={"2"} color={"gray.600"}>
              Ex: nome@mail.com
            </Text>
          )}

          <Input
            icon={FaMobile}
            label={"Telefone"}
            type={"tel"}
            error={errors.telephone}
            {...register("telephone")}
            placeholder={"Digite seu telefone"}
          />
          {!errors.telephone && (
            <Text fontSize={"xs"} m={"1"} mb={"2"} color={"gray.600"}>
              Ex: 99999999999
            </Text>
          )}

          <Input
            icon={FaCamera}
            label={"Adicione foto"}
            type={"url"}
            error={errors.imageUrl}
            {...register("imageUrl")}
            placeholder={"Adicione sua foto"}
          />
          {!errors.imageUrl && (
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
      </ModalContent>
    </Modal>
  );
};

export default CreateContacts;
