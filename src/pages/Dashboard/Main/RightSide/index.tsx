import { Wrap, WrapItem } from "@chakra-ui/react";
import Cards from "../../../../components/Cards";
import { useAuth } from "../../../../contexts/Auth";
import { useContacts } from "../../../../contexts/Contact";
import { useEffect, useState } from "react";

const RightSide = () => {
  const [loading, setLoading] = useState(true);
  const { user, token } = useAuth();
  const { contacts, loadContacts } = useContacts();

  useEffect(() => {
    loadContacts(user.id, token).then((res) => {
      setLoading(false);
    });
  }, []);

  return (
    <Wrap justify={"space-between"} pt={"7"}>
      {contacts.map((contact) => (
        <WrapItem key={contact.id}>
          <Cards contact={contact} />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default RightSide;
