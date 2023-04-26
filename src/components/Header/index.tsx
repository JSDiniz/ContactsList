import { Flex, Text, HStack, useColorMode, Button } from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex align="center" justify="center">
      <HStack gap="5">
        <Button onClick={toggleColorMode} variant="primary">
          Teste
        </Button>
        <Text color={"primary_cor"}>Testando</Text>
      </HStack>
    </Flex>
  );
};

export default Header;
