import { Button, Flex, HStack, Heading, Icon } from "@chakra-ui/react";
import Search from "../../../../components/Search";

const LeftSide = () => {
  return (
    <Flex
      w={"full"}
      alignItems={"center"}
      gap={4}
      flexDir={["column", "column", "row", "row"]}
      justifyContent={"flex-end"}
    >
      <Search />
      <Button fontSize={"sm"} w={["full", "auto", "auto", "auto"]}>
        Adicionar Contacts
      </Button>
    </Flex>
  );
};

export default LeftSide;
