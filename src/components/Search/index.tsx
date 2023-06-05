import { Center, Flex, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../../contexts/Auth";
import { useState } from "react";

const Search = () => {
  const { setContacts, contactsCopy } = useAuth();
  const [firstName, setFirstName] = useState("");

  const handleSearch = (name: string) => {
    setFirstName(name);
    const filterContacts = contactsCopy.filter((elem) =>
      elem.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );

    setContacts(filterContacts);
  };

  return (
    <Flex as={"form"} w={["full", "80%", "24rem", "24rem"]} gap={"2"}>
      <Input
        h={"40px"}
        w={"full"}
        type={"text"}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={"Pesquisar por contacts"}
      />
      <Center
        as={"button"}
        type="button"
        borderRadius={"8px"}
        w={"64px"}
        h={"40px"}
        fontSize={"2xl"}
        bg={"gray.400"}
        onClick={() => handleSearch(firstName)}
      >
        <FaSearch />
      </Center>
    </Flex>
  );
};

export default Search;
