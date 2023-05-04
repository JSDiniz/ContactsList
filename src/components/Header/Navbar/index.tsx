import { HStack, Flex } from "@chakra-ui/react";
import Navigation from "./Navigation";
import DarkMode from "./DarkMode";
import NavMobile from "./NavMobile";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../contexts/Auth";
import NavLogged from "./NavLogged";

const Navbar = () => {
  const { pathname } = useLocation();
  const { token } = useAuth();

  return (
    <Flex gap={5}>
      {pathname !== "/dashboard" && !!token === false && <Navigation />}

      <HStack>
        <DarkMode />
        {pathname !== "/dashboard" && !!token === false ? (
          <NavMobile />
        ) : (
          <NavLogged />
        )}
      </HStack>
    </Flex>
  );
};

export default Navbar;
