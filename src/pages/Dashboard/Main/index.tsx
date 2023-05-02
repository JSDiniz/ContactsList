import { Stack, Text } from "@chakra-ui/react";

const Main = () => {
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
    </Stack>
  );
};

export default Main;
