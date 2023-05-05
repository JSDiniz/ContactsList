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
import { IUpdate, IUserReq } from "../../interface/User";
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
            mb={4}
          />

          <Input
            type={"email"}
            label={"Email"}
            defaultValue={user.email}
            icon={FaEnvelope}
            error={errors.email}
            {...register("email")}
            placeholder={"Digite seu login"}
            mb={4}
          />

          <Input
            icon={FaMobile}
            label={"Telefone"}
            type={"tel"}
            defaultValue={user.telephone}
            error={errors.telephone}
            {...register("telephone")}
            placeholder={"Confirme suas telefone"}
            mb={4}
          />

          <Input
            icon={FaCamera}
            label={"Adicione foto"}
            type={"url"}
            defaultValue={user.imageUrl}
            error={errors.imageUrl}
            {...register("imageUrl")}
            placeholder={"Adicione sua foto"}
            mb={4}
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={() => deleteUser(user.id, token)} mr={3}>
            Excluir
          </Button>
          <Button type="submit" variant="ghost">
            Salvar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Profile;
