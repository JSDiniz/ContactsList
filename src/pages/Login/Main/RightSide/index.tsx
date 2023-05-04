import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../../../../components/Form";
import { useAuth } from "../../../../contexts/Auth";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Ilogin } from "../../../../interface/Login";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../../schemas/Login";
import {
  Box,
  VStack,
  Heading,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import ModalSuccess from "../../../../components/Modal/ModalSuccess";
import ModalError from "../../../../components/Modal/ModalError";

const RightSide = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

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
  } = useForm<Ilogin>({
    resolver: yupResolver(loginSchema),
  });

  const handleSignIn = (body: Ilogin) => {
    setLoading(true);

    signIn(body)
      .then((_) => {
        setLoading(false);
        onModalSuccess();
      })
      .catch((err) => {
        setLoading(false);
        onModalError();
      });
  };

  return (
    <>
      <ModalSuccess isOpen={isModalSuccess} onClose={onModalSuccessClose} />
      <ModalError
        isOpen={isModalError}
        onClose={onModalErrorClose}
        error={"Email ou senha invalido"}
        secondaryTex="Você já pode tentar novamente, <b>clicando</b> no botão acima ou
        aguarde alguns minutos..."
      />
      <Box
        as={"section"}
        h={"full"}
        maxW={"480px"}
        w={["full", "full", "50%", "50%"]}
      >
        <Heading as={"h1"} textAlign={"center"}>
          Login
        </Heading>

        <VStack
          as={"form"}
          w={"full"}
          mt={8}
          spacing={5}
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Box w={"full"}>
            <Input
              type={"email"}
              label={"Login"}
              icon={FaEnvelope}
              error={errors.email}
              {...register("email")}
              placeholder={"Digite seu login"}
            />
            {!errors.email && (
              <Text fontSize={"xs"} ml={"1"} mt={"1"} color={"gray.600"}>
                Ex: nome@mail.com
              </Text>
            )}
          </Box>

          <Box w={"full"}>
            <Input
              icon={FaLock}
              label={"Senha"}
              type={"password"}
              error={errors.password}
              {...register("password")}
              placeholder={"Digite sua senha"}
            />
            {!errors.password && (
              <Text fontSize={"xs"} ml={"1"} mt={"1"} color={"gray.600"}>
                Ex: Sahaj@a5841
              </Text>
            )}
          </Box>

          <VStack w={"full"} mt={"4"} spacing={"5"}>
            <Button variant={"toEnter"} type={"submit"}>
              Entrar
            </Button>

            <Link to={"/register"}>
              <Text
                fontSize={"14px"}
                color={"gray.600"}
                fontWeight={"normal"}
                borderBottom={"1px"}
                borderColor={"transparent"}
                _hover={{
                  color: "gray.100",
                  borderBottom: "1px",
                  borderColor: "gray.100",
                }}
              >
                Ainda não possui uma conta?
              </Text>
            </Link>

            <Button variant={"register"}>Cadastre-se </Button>
          </VStack>
        </VStack>
      </Box>
    </>
  );
};

export default RightSide;
