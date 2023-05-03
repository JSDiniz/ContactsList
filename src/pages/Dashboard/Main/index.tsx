import { Button, Stack, Text } from "@chakra-ui/react";
import { useAuth } from "../../../contexts/Auth";

const Main = () => {
  const { logout } = useAuth();

  return (
    <Stack
      as={"main"}
      minH="calc(100vh - 5rem - 3.125rem)"
      alignItems={"center"}
      justifyContent={[
        "space-around",
        "space-around",
        "space-between",
        "space-between",
      ]}
      flexDir={["column", "column", "row", "row"]}
    >
      <Text>Dashboard</Text>
      <Button onClick={logout}>Sair</Button>
    </Stack>
  );
};

export default Main;
