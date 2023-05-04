import { Button, Flex, Heading, Icon } from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";

const LeftSide = () => {
  return (
    <Flex h={"80px"} justify={"space-between"}>
      <Heading as={"h1"} fontSize={"2xl"}>
        Contacts
      </Heading>
      <Button>
        <Icon as={SmallAddIcon} />
      </Button>
    </Flex>
  );
};

export default LeftSide;
