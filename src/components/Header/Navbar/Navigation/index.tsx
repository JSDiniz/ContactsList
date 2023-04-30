import { List, ListItem, Link } from "@chakra-ui/react";

export const items = ["Home", "Login", "Cadastro"];

const Navigation = () => {
  return (
    <List
      display={["none", "flex", "flex", "flex"]}
      alignItems={"center"}
      gap={5}
    >
      {items.map((item, index) => (
        <ListItem key={index}>
          <Link textDecor="none">{item}</Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Navigation;
