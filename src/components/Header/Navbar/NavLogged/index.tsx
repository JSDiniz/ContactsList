import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Link,
  useDisclosure,
} from "@chakra-ui/react";

import { useAuth } from "../../../../contexts/Auth";
import Profile from "../../../Profile";

const NavLogged = () => {
  const { logout } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user } = useAuth();
  return (
    <Menu>
      {isOpen && <Profile isOpen={isOpen} onClose={onClose} />}
      <MenuButton>
        <Avatar
          name={user.name}
          src={user.imageUrl}
          size={"sm"}
          fontSize={"2xl"}
          borderRadius={"md"}
        />
      </MenuButton>

      <MenuList>
        <MenuItem onClick={onOpen}>Profile</MenuItem>
        <MenuItem as={"button"} onClick={logout}>
          Sair
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavLogged;
