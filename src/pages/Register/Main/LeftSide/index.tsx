import {
  VStack,
  Stack,
  Heading,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Input } from "../../../../components/Form";
import { FaEnvelope, FaLock, FaUser, FaMobile, FaCamera } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserReq } from "../../../../interface/User";
import { userSchemasReq } from "../../../../schemas/Register";
import { useState } from "react";
import { Api } from "../../../../services";
import ModalSuccess from "../../../../components/Modal/ModalSuccess";
import ModalError from "../../../../components/Modal/ModalError";
import { useHistory } from "react-router-dom";

const LeftSide = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const {
    isOpen: isModalSuccess,
    onOpen: onModalSuccess,
    onClose: onModalSuccessClose,
  } = useDisclosure();
  const {
    isOpen: isModalError,
    onOpen: onModalError,
    onClose: onModalErrorClose,
  } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserReq>({
    resolver: yupResolver(userSchemasReq),
  });

  const handleSignUp = (body: IUserReq) => {
    Reflect.deleteProperty(body, "confirmPassword");

    setLoading(true);

    Api.post("/users", body)
      .then((res) => {
        setLoading(false);
        onModalSuccess();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        onModalError();
      });
  };

  return (
    <>
      <ModalSuccess
        isOpen={isModalSuccess}
        onClose={onModalSuccessClose}
        onClick={() => history.push("/login")}
        buttonText={"Ir para o login agora"}
      />
      <ModalError
        isOpen={isModalError}
        onClose={onModalErrorClose}
        error={"Seu email já está em uso"}
        secondaryTex="Você já pode tentar novamente, <b>clicando</b> no botão acima ou
        aguarde alguns minutos..."
      />
      <VStack
        h={"full"}
        maxW={"480px"}
        w={["full", "full", "50%", "50%"]}
        style={{ margin: "0" }}
        gap={8}
      >
        <Heading as={"h1"}>Crie sua conta</Heading>

        <Stack
          as={"form"}
          w={"full"}
          style={{ margin: "0" }}
          gap={3}
          alignItems={"center"}
          onSubmit={handleSubmit(handleSignUp)}
        >
          <Input
            type={"text"}
            icon={FaUser}
            label={"Login"}
            error={errors.name}
            {...register("name")}
            placeholder={"Digite seu nome"}
          />

          <Input
            type={"email"}
            label={"email"}
            icon={FaEnvelope}
            error={errors.email}
            {...register("email")}
            placeholder={"Digite seu email"}
          />

          <Input
            icon={FaLock}
            label={"Senha"}
            type={"password"}
            error={errors.password}
            {...register("password")}
            placeholder={"Digite sua senha"}
          />

          <Input
            icon={FaLock}
            label={"Senha"}
            type={"password"}
            error={errors.confirmPassword}
            {...register("confirmPassword")}
            placeholder={"Confirme suas senha"}
          />

          <Input
            icon={FaMobile}
            label={"Telefone"}
            type={"tel"}
            error={errors.telephone}
            {...register("telephone")}
            placeholder={"Digite seu telefone"}
          />

          <Input
            icon={FaCamera}
            label={"Adicione foto"}
            type={"url"}
            error={errors.imageUrl}
            {...register("imageUrl")}
            placeholder={"Adicione sua foto"}
          />

          <Button variant={"toEnter"} type={"submit"}>
            Cadastrar
          </Button>
        </Stack>
      </VStack>
    </>
  );
};

export default LeftSide;
