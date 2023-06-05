import {
  Box,
  Text,
  Button,
  VStack,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { Input } from "../../../../components/Form";
import { useAuth } from "../../../../contexts/Auth";
import { Ilogin } from "../../../../interface/Login";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../../schemas/Login";
import ModalError from "../../../../components/Modal/ModalError";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import ModalSuccess from "../../../../components/Modal/ModalSuccess";

const RightSide = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [eye, setEye] = useState(false);
  const history = useHistory();
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
        console.log(err);
        setErrorMessage(err.response.data["message"]);
        setLoading(false);
        onModalError();
      });
    console.log("test");
  };

  return (
    <>
      <ModalSuccess
        isOpen={isModalSuccess}
        onClose={onModalSuccessClose}
        mensage={"Login realizado com sucesso"}
        secondaryTex=""
      />

      <ModalError
        isOpen={isModalError}
        onClose={onModalErrorClose}
        error={errorMessage}
        secondaryTex="Você já pode tentar novamente, <b>clicando</b> no botão acima ou
        aguarde alguns minutos..."
      />
      <Box
        as={"section"}
        h={"full"}
        maxW={"480px"}
        w={["full", "full", "50%", "50%"]}
        my={"2.5rem"}
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
              type={eye ? "text" : "password"}
              iconRight={eye ? FaEye : FaEyeSlash}
              onClick={() => setEye(!eye)}
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

            <Button
              onClick={() => history.push("/register")}
              variant={"register"}
            >
              Cadastre-se
            </Button>
          </VStack>
        </VStack>
      </Box>
    </>
  );
};

export default RightSide;
