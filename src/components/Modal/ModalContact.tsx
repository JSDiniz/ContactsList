import {
  VStack,
  Button,
  Text,
  Center,
  Box,
  Flex,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { CiViewList } from "react-icons/ci";
import CreateContacts from "../CreateContacts";

const ModalContact = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      {isOpen && <CreateContacts isOpen={isOpen} onClose={onClose} />}

      <Center
        w={"100%"}
        mt={"35px"}
        p={"100px 0px"}
        borderWidth={"2px"}
        borderColor={"secondary_text"}
        borderStyle={"dashed"}
      >
        <VStack borderRadius={"5px"} mr={2} gap={"20px"}>
          <CiViewList fontSize={"35px"} />
          <Heading textAlign={"center"} variant={"Heading-3-500"}>
            Vamos adicionar seu primeira contato
          </Heading>
          <Text textAlign={"center"}>
            Insira seus contatos e tenha maior controle
          </Text>
          <Button p={"30px 25px"} bg={"orange.600"} onClick={onOpen}>
            Criar seu primeiro contato
          </Button>
        </VStack>
      </Center>
    </>
  );
};

export default ModalContact;
