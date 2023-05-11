import {
  Text,
  Stack,
  Button,
  VStack,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaMobile,
  FaCamera,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Api } from "../../../../services";
import { useHistory } from "react-router-dom";
import { Input } from "../../../../components/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserReq } from "../../../../interface/User";
import { userSchemasReq } from "../../../../schemas/Register";
import ModalError from "../../../../components/Modal/ModalError";
import ModalSuccess from "../../../../components/Modal/ModalSuccess";

const LeftSide = () => {
  const [loading, setLoading] = useState(false);
  const [eye, setEye] = useState(false);
  const [verifyEye, setVerifyEye] = useState(false);
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
        gap={8}
        style={{ marginTop: "2.5rem" }}
      >
        <Heading as={"h1"}>Crie sua conta</Heading>

        <Stack
          as={"form"}
          w={"full"}
          style={{ margin: "0" }}
          onSubmit={handleSubmit(handleSignUp)}
        >
          <Input
            type={"text"}
            icon={FaUser}
            label={"Name"}
            error={errors.name}
            {...register("name")}
            placeholder={"Digite seu nome"}
          />
          {!errors.name && (
            <Text fontSize={"xs"} ml={"1"} my={"1"} color={"gray.600"}>
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
            <Text fontSize={"xs"} ml={"1"} my={"1"} color={"gray.600"}>
              Ex: nome@mail.com
            </Text>
          )}

          <Input
            icon={FaLock}
            label={"Senha"}
            type={eye ? "text" : "password"}
            iconRight={eye ? FaEye : FaEyeSlash}
            onClick={() => setEye(!eye)}
            error={errors.password}
            {...register("password")}
            placeholder={"Digite sua senha"}
          />
          {!errors.password && (
            <Text fontSize={"xs"} ml={"1"} mt={"y"} color={"gray.600"}>
              Ex: Sahaj@a5841
            </Text>
          )}

          <Input
            icon={FaLock}
            label={"Verifique a senha"}
            type={verifyEye ? "text" : "password"}
            iconRight={verifyEye ? FaEye : FaEyeSlash}
            onClick={() => setVerifyEye(!verifyEye)}
            error={errors.confirmPassword}
            {...register("confirmPassword")}
            placeholder={"Verifique a senha"}
          />
          {!errors.confirmPassword && (
            <Text fontSize={"xs"} ml={"1"} my={"1"} color={"gray.600"}>
              Ex: Sahaj@a5841
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
            <Text fontSize={"xs"} ml={"1"} my={"1"} color={"gray.600"}>
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
            <Text fontSize={"xs"} ml={"1"} my={"1"} color={"gray.600"}>
              Ex: data:image/jpeg;base86
            </Text>
          )}

          <Button
            style={{ marginTop: "1.875rem" }}
            alignSelf={"center"}
            variant={"toEnter"}
            type={"submit"}
          >
            Cadastrar
          </Button>
        </Stack>
      </VStack>
    </>
  );
};

export default LeftSide;
