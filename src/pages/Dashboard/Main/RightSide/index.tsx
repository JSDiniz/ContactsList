import { Wrap, WrapItem } from "@chakra-ui/react";
import Cards from "../../../../components/Cards";
import { useAuth } from "../../../../contexts/Auth";

const RightSide = () => {
  const { contacts } = useAuth();

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
