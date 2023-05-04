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

const Profile = ({ isOpen, onClose }: any) => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as={"form"}>
        <ModalHeader>Perfil</ModalHeader>

        <ModalBody>
          <Input
            type={"text"}
            label={"Name"}
            icon={FaUser}
            {...register("name")}
            placeholder={"Digite seu nome"}
          />

          <Input
            type={"email"}
            label={"Login"}
            icon={FaEnvelope}
            {...register("email")}
            placeholder={"Digite seu login"}
          />

          <Input
            icon={FaLock}
            label={"Senha"}
            type={"password"}
            {...register("password")}
            placeholder={"Digite sua senha"}
          />

          <Input
            icon={FaLock}
            label={"Senha"}
            type={"password"}
            {...register("password")}
            placeholder={"Confirme suas senha"}
          />

          <Input
            icon={FaMobile}
            label={"Telefone"}
            type={"tel"}
            {...register("tel")}
            placeholder={"Confirme suas telefone"}
          />

          <Input
            icon={FaCamera}
            label={"Adicione foto"}
            type={"url"}
            {...register("tel")}
            placeholder={"Adicione sua foto"}
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="ghost">Salvar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Profile;
