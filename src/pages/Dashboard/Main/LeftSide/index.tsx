import Search from "../../../../components/Search";
import { Button, Flex, useDisclosure } from "@chakra-ui/react";
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
          fontWeight={"500"}
          variant={"primary"}
        >
          Adicionar Contacts
        </Button>
      </Flex>
    </>
  );
};

export default LeftSide;
