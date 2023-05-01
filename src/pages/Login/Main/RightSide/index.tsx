import { VStack, Stack, Heading, Button, Text } from "@chakra-ui/react";
import Forms from "../../../../components/Forms/intex";
import { Link } from "react-router-dom";

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

        <Link to={"/register"}>
          <Text
            fontSize={"14px"}
            fontWeight={"normal"}
            borderBottom={"1px"}
            borderColor={"transparent"}
            _hover={{ borderBottom: "1px", borderColor: "whiteFixed" }}
          >
            Ainda não possui uma conta?
          </Text>
        </Link>
        <Button variant={"register"}>Cadastre-se</Button>
      </Stack>
    </VStack>
  );
};

export default RightSide;
