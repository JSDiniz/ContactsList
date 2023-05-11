import { useEffect, useState } from "react";
import Cards from "../../../../components/Cards";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { useAuth } from "../../../../contexts/Auth";
import { useContacts } from "../../../../contexts/Contact";

const RightSide = () => {
  const [loading, setLoading] = useState(true);
  const { user, token, contacts } = useAuth();
  const { loadContacts } = useContacts();

  useEffect(() => {
    loadContacts(user.id, token).then((res) => {
      setLoading(false);
    });
  }, []);

  return (
    <Wrap
      justify={["center", "space-between", "space-between", "space-between"]}
      pt={"7"}
    >
      {contacts?.length !== 0
        ? contacts?.map((contact) => (
            <WrapItem key={contact.id}>
              <Cards contact={contact} />
            </WrapItem>
          ))
        : "Adicionar contatcs"}
    </Wrap>
  );
};

export default RightSide;
