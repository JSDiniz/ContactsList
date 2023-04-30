import { Flex, Icon, Text } from "@chakra-ui/react";
import { FaRegAddressBook } from "react-icons/fa";

const Logo = () => {
  return (
    <Flex alignItems="center" gap="14px">
      <Icon as={FaRegAddressBook} fontSize={["2xl", "4xl"]} />
      <Text variant="Heading-3-500">Contacts List</Text>
    </Flex>
  );
};

export default Logo;
