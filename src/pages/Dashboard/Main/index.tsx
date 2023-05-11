import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { Flex } from "@chakra-ui/react";

const Main = () => {
  return (
    <Flex as={"main"} minH="calc(100vh - 5rem - 3.125rem)" flexDir={"column"}>
      <LeftSide />
      <RightSide />
    </Flex>
  );
};

export default Main;
