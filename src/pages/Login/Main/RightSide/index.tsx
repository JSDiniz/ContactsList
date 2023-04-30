import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Stack,
  Input,
  Heading,
  Button,
  Link,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

const RightSide = () => {
  return (
    <Stack
      h={"full"}
      w={["full", "50%", "40%", "40%"]}
      gap={5}
      order={["1", "1", "2", "2"]}
    >
      <Heading m={"0 auto"} as={"h1"}>
        Login
      </Heading>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<EmailIcon color="brand1" />}
          />
          <Input w={"full"} type={"email"} placeholder={"Digite seu Email"} />
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Pssword</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<LockIcon color="brand1" />}
          />
          <Input type={"password"} placeholder={"Digite seu senha"} />
        </InputGroup>
      </FormControl>
      <Stack gap={5} alignItems={"center"}>
        <Button
          w={"262px"}
          fontSize={"16px"}
          fontWeight={"normal"}
          bg={"brand1"}
          color={"whiteFixed"}
          border="2px "
          borderColor="brand1"
          _hover={{ bg: "brand2" }}
        >
          Entrar
        </Button>
        <Link fontSize={"14px"} fontWeight={"normal"}>
          Ainda não possui uma conta?
        </Link>
        <Button
          w={"262px"}
          fontSize={"16px"}
          fontWeight={"normal"}
          color={"primary_text2"}
          border="2px "
          borderColor="brand1"
          _hover={{ bg: "brand1" }}
        >
          Cadastre-se
        </Button>
      </Stack>
    </Stack>
  );
};

export default RightSide;
