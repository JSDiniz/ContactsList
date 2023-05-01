import { List, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const items = [
  { route: "Home", link: "/" },
  { route: "Login", link: "/login" },
  { route: "Cadastro", link: "/register" },
];

const Navigation = () => {
  return (
    <List
      display={["none", "flex", "flex", "flex"]}
      alignItems={"center"}
      gap={5}
    >
      {items.map((item, index) => (
        <ListItem key={index}>
          <Link to={item.link}>{item.route}</Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Navigation;
