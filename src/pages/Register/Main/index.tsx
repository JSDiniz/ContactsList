import { Stack } from "@chakra-ui/react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Main = () => {
  return (
    <Stack
      as={"main"}
      minH="calc(100vh - 5rem - 3.125rem)"
      w={"full"}
      gap={5}
      alignItems={"center"}
      justifyContent={[
        "space-around",
        "space-around",
        "space-between",
        "space-between",
      ]}
      flexDir={["column", "column", "row", "row"]}
      mb={"1.875rem"}
    >
      <LeftSide />
      <RightSide />
    </Stack>
  );
};

export default Main;
