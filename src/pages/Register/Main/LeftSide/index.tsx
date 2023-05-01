import { VStack, Stack, Heading, Link, Button } from "@chakra-ui/react";
import Forms from "../../../../components/Forms/intex";

const LeftSide = () => {
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
        <Forms
          label={"Nome"}
          type={"text"}
          placeholder={"Digite aqui seu nome"}
        />

        <Forms
          label={"Email"}
          type={"email"}
          placeholder={"Digite seu Email"}
        />

        <Forms
          label={"Password"}
          type={"password"}
          placeholder={"Digite aqui sua senha"}
        />

        <Forms
          label={"Confirmar Senha"}
          type={"password"}
          placeholder={"Digite novamente sua senha"}
        />

        <Forms
          label={"Telefone"}
          type={"tel"}
          placeholder={"Digite aqui seu Telefone"}
        />

        <Forms
          label={"Adicione foto"}
          type={"url"}
          placeholder={"Adicione sua foto aqui"}
        />
        <Button variant={"toEnter"}>Cadastrar</Button>
      </Stack>
    </VStack>
  );
};

export default LeftSide;
