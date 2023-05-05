import { Flex } from "@chakra-ui/react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { useAuth } from "../../../contexts/Auth";

const Main = () => {
  const { user } = useAuth();

  return (
    <Flex as={"main"} minH="calc(100vh - 5rem - 3.125rem)" flexDir={"column"}>
      <LeftSide />
      {user.contacts.length !== 0 ? <RightSide /> : "Adicionar contatcs"}
    </Flex>
  );
};

export default Main;
