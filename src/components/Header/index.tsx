import {
  Flex,
  Text,
  useColorMode,
  UnorderedList,
  ListItem,
  Box,
  Link,
} from "@chakra-ui/react";
import Section from "../../styles/ContainerTheme";
import { FaRegAddressBook, FaMoon } from "react-icons/fa";
import { BiSun } from "react-icons/bi";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const list = ["Home", "Login", "Cadastro"];

  return (
    <Section h="80px">
      <Flex alignItems="center" gap="14px" h="100%">
        <FaRegAddressBook size="40px" rotate="-90" />
        <Text variant="Heading-3-500">Contacts List</Text>
      </Flex>
      <Flex alignItems="center" h="100%" gap="14px">
        <UnorderedList w="100%" listStyleType="none" display="flex" gap="14px">
          {list.map((element: string) => (
            <ListItem>
              <Link textDecor="none">{element}</Link>
            </ListItem>
          ))}
        </UnorderedList>
        <Box w="30px" cursor="pointer" onClick={toggleColorMode}>
          {colorMode == "dark" ? (
            <FaMoon size="24px" />
          ) : (
            <BiSun size="30px" color="#F2C94C" />
          )}
        </Box>
      </Flex>
    </Section>
  );
};

export default Header;

// {list?.map((item: any) => {
//   <ListItem>{item}</ListItem>;
// })}
