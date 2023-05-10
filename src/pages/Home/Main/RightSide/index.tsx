import { Text, Flex, Heading, Highlight } from "@chakra-ui/react";

const RightSide = () => {
  return (
    <Flex
      maxW={["full", "full", "25rem", "25rem"]}
      gap={[10, 10, 5, 5]}
      flexDir={"column"}
      alignItems={"center"}
    >
      <Heading
        as={"h1"}
        lineHeight={["8", "10", "10", "10"]}
        textAlign={["center", "center", "unset", "unset"]}
        fontSize={["2xl", "4xl", "4xl", "4xl"]}
        maxW={["250px", "350px", "unset"]}
        pt={["30px", "30px", "0", "0"]}
      >
        <Highlight
          query={["Contacts", "List"]}
          styles={{ color: "orange.600" }}
        >
          Seja Bem-vindo ao Contacts List
        </Highlight>
      </Heading>
      <Text
        fontSize={"sm"}
        fontWeight={"normal"}
        w={"full"}
        pr={["10px", "10px", "0", "0"]}
        textAlign={["center", "center", "unset"]}
      >
        O <strong>Contacts List</strong> é a ferramenta ideal para o seu
        negócio, de fácil utilização e uma interface descomplicada com a gestão
        completa de seu clientes e contatos. Idealizada para empresários,
        empreendedores e profissionais em vendas.
      </Text>
    </Flex>
  );
};

export default RightSide;
