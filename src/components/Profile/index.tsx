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
import { useAuth } from "../../contexts/Auth";
import { Input } from "../Form";
import { useForm } from "react-hook-form";
import { IUpdate } from "../../interface/User";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateUserSchemasReq } from "../../schemas/Register";

interface IProfile {
  isOpen: boolean;
  onClose: () => void;
}

const Profile = ({ isOpen, onClose }: IProfile) => {
  const { token, user, deleteUser, updateUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdate>({
    resolver: yupResolver(updateUserSchemasReq),
  });

  const handleUpdateUser = (body: IUpdate) => {
    updateUser(user.id, body, token);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as={"form"} onSubmit={handleSubmit(handleUpdateUser)}>
        <ModalHeader>Perfil</ModalHeader>

        <ModalBody>
          <Input
            type={"text"}
            icon={FaUser}
            label={"Login"}
            defaultValue={user.name}
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
            defaultValue={user.email}
            icon={FaEnvelope}
            error={errors.email}
            {...register("email")}
            placeholder={"Digite seu login"}
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
            defaultValue={user.phone}
            error={errors.phone}
            {...register("phone")}
            placeholder={"Confirme suas telefone"}
          />
          {!errors.phone && (
            <Text fontSize={"xs"} m={"1"} mb={"2"} color={"gray.600"}>
              Ex: 99999999999
            </Text>
          )}

          <Input
            icon={FaCamera}
            label={"Adicione foto"}
            type={"url"}
            defaultValue={user.imageUrl}
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
          <Button w={"6.25em"} variant={"toEnter"} mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button
            variant={"excluir"}
            onClick={() => deleteUser(user.id, token)}
            mr={3}
          >
            Excluir
          </Button>
          <Button type="submit" variant="register" w={"6.25em"}>
            Salvar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Profile;
