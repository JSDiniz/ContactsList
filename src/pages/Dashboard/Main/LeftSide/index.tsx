import {
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import Search from "../../../../components/Search";
import CreateContacts from "../../../../components/CreateContacts";

const LeftSide = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      {isOpen && <CreateContacts isOpen={isOpen} onClose={onClose} />}
      <Flex
        w={"full"}
        alignItems={"center"}
        gap={4}
        flexDir={["column", "column", "row", "row"]}
        justifyContent={"flex-end"}
      >
        <Search />
        <Button
          onClick={onOpen}
          fontSize={"sm"}
          w={["full", "auto", "auto", "auto"]}
        >
          Adicionar Contacts
        </Button>
      </Flex>
    </>
  );
};

export default LeftSide;
