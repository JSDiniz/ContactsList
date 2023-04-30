import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <Flex as={"header"} w={"full"} p={"1.25rem 0"} justify={"space-between"}>
      <Logo />
      <Navbar />
    </Flex>
  );
};

export default Header;
