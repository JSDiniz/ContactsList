import { Center, Flex } from "@chakra-ui/react";
import { Input } from "../Form";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <Flex as={"form"} gap={"4"}>
      <Input
        h={"40px"}
        w={"full"}
        type={"text"}
        name={"tutle"}
        placeholder={"Pesquisar por contacts"}
      />
      <Center
        as={"button"}
        borderRadius={"8px"}
        w={"64px"}
        h={"40px"}
        fontSize={"2xl"}
        bg={"gray.400"}
      >
        <FaSearch />
      </Center>
    </Flex>
  );
};

export default Search;
