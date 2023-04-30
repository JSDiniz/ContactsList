import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { items } from "../Navigation";
const NavMobile = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        border={"none"}
        variant="outline"
        aria-label="Options"
        display={["flex", "none", "none", "none"]}
        icon={<HamburgerIcon fontSize={"xl"} />}
      />
      <MenuList>
        {items.map((item, index) => (
          <MenuItem key={index}>{item}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default NavMobile;
