import { useEffect, useState } from "react";
import Cards from "../../../../components/Cards";
import { UnorderedList, ListItem } from "@chakra-ui/react";
import { useAuth } from "../../../../contexts/Auth";
import { useContacts } from "../../../../contexts/Contact";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";

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
    <UnorderedList
      display={"flex"}
      flexWrap={["unset", "unset", "wrap", "wrap"]}
      overflowX={["auto", "auto", "unset", "unset"]}
      width={"full"}
      gap={"42.5px"}
      styleType={"none"}
      margin={"0"}
      pt={"7"}
      pb={["4", "4", "0", "0"]}
    >
      {contacts?.length !== 0
        ? contacts?.map((contact) => (
            <ListItem key={contact.id}>
              <Cards contact={contact} />
            </ListItem>
          ))
        : "Adicionar contatcs"}
    </UnorderedList>
  );
};

export default RightSide;
