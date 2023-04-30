import { Stack } from "@chakra-ui/react";

import RightSide from "./RightSide";
import LeftSide from "./LeftSide/LeftSide";

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
      <RightSide />
      <LeftSide />
    </Stack>
  );
};

export default Main;
