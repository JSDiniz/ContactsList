import { useHistory } from "react-router-dom";
import { FaRegAddressBook } from "react-icons/fa";
import { Flex, Icon, Text } from "@chakra-ui/react";

const Logo = () => {
  const history = useHistory();

  return (
    <Flex
      alignItems="center"
      gap="14px"
      onClick={() => history.push("/")}
      cursor={"pointer"}
    >
      <Icon as={FaRegAddressBook} fontSize={["2xl", "4xl"]} />
      <Text variant="Heading-3-500">Contacts List</Text>
    </Flex>
  );
};

export default Logo;
