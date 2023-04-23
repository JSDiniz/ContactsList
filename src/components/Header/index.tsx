import {
  Flex,
  Text,
  HStack,
  useColorMode,
  useColorModeValue,
  Button,
  DarkMode,
} from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex h="100vh" w="100vw" align="center" justify="center">
      <HStack gap="5">
        <Button onClick={toggleColorMode} variant="primary">
          Teste
        </Button>
      </HStack>
    </Flex>
  );
};

export default Header;
