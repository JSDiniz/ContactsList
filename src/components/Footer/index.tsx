import { VStack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <VStack
      as={"footer"}
      h={"3.125rem"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text fontSize={"xs"} color={"grey3"} textAlign={"center"}>
        © 2023 CONTACTS LIST. TODOS OS DIREITOS RESERVADOS.
      </Text>
    </VStack>
  );
};

export default Footer;
