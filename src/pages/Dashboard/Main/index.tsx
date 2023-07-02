import ModalContact from "../../../components/Modal/ModalContact";
import { useAuth } from "../../../contexts/Auth";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { Flex } from "@chakra-ui/react";

const Main = () => {
  const { contactsCopy } = useAuth();
  return (
    <Flex as={"main"} minH="calc(100vh - 5rem - 3.125rem)" flexDir={"column"}>
      {contactsCopy.length !== 0 ? (
        <>
          <LeftSide />
          <RightSide />
        </>
      ) : (
        <ModalContact />
      )}
    </Flex>
  );
};

export default Main;
