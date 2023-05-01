import { VStack, Stack, Heading, Link, Button } from "@chakra-ui/react";
import Forms from "../../../../components/Forms/intex";

const RightSide = () => {
  return (
    <VStack
      h={"full"}
      maxW={"480px"}
      w={["full", "full", "50%", "50%"]}
      style={{ margin: "0" }}
      gap={8}
    >
      <Heading as={"h1"}>Login</Heading>

      <Stack
        as={"form"}
        w={"full"}
        style={{ margin: "0" }}
        gap={5}
        alignItems={"center"}
      >
        <Forms
          label={"Email"}
          type={"email"}
          placeholder={"Digite seu Email"}
        />

        <Forms
          label={"Password"}
          type={"password"}
          placeholder={"Digite seu Senha"}
        />
        <Button variant={"toEnter"}>Entrar</Button>
        <Link fontSize={"14px"} fontWeight={"normal"}>
          Ainda não possui uma conta?
        </Link>
        <Button variant={"register"}>Cadastre-se</Button>
      </Stack>
    </VStack>
  );
};

export default RightSide;
