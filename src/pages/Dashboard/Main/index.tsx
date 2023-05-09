import { Flex } from "@chakra-ui/react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { useAuth } from "../../../contexts/Auth";
import { useEffect, useState } from "react";
import { useContacts } from "../../../contexts/Contact";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const { user, token, contacts } = useAuth();
  const { loadContacts } = useContacts();

  useEffect(() => {
    loadContacts(user.id, token).then((res) => {
      setLoading(false);
    });
  }, []);

  return (
    <Flex as={"main"} minH="calc(100vh - 5rem - 3.125rem)" flexDir={"column"}>
      <LeftSide />
      {contacts.length !== 0 ? <RightSide /> : "Adicionar contatcs"}
    </Flex>
  );
};

export default Main;
