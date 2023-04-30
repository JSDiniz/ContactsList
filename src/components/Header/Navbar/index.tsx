import { HStack, Flex } from "@chakra-ui/react";
import Navigation from "./Navigation";
import DarkMode from "./DarkMode";
import NavMobile from "./NavMobile";

const Navbar = () => {
  return (
    <Flex gap={5}>
      <Navigation />
      <HStack>
        <DarkMode />
        <NavMobile />
      </HStack>
    </Flex>
  );
};

export default Navbar;
