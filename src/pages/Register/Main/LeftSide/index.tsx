import { VStack, Stack, Heading, Link, Button } from "@chakra-ui/react";
import { Input } from "../../../../components/Form";
import { FaEnvelope, FaLock, FaUser, FaMobile, FaCamera } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const LeftSide = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
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
      >
        <Input
          type={"text"}
          label={"Login"}
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

        <Button variant={"toEnter"}>Cadastrar</Button>
      </Stack>
    </VStack>
  );
};

export default LeftSide;
