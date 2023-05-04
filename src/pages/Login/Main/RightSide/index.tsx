import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../../../../components/Form";
import { useAuth } from "../../../../contexts/Auth";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Ilogin } from "../../../../interface/Login";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../../schemas/Login";
import { Box, VStack, Heading, Button, Text } from "@chakra-ui/react";

const RightSide = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

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
      .then((_) => setLoading(false))
      .catch((err) => setLoading(false));
  };

  return (
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

          <Button variant={"register"}>Cadastre-se</Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default RightSide;
