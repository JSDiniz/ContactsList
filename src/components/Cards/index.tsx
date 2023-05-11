import {
  Card,
  Icon,
  Text,
  Stack,
  HStack,
  Button,
  Avatar,
  Heading,
  CardBody,
  CardFooter,
  useDisclosure,
} from "@chakra-ui/react";
import EditContact from "../EditContact";
import { useAuth } from "../../contexts/Auth";
import { useContacts } from "../../contexts/Contact";
import { FaEnvelope, FaMobile } from "react-icons/fa";
import { IContactsRes } from "../../interface/Contacts";

interface IContactProps {
  contact: IContactsRes;
}

const Cards = ({ contact }: IContactProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { deleteContacts } = useContacts();
  const { token } = useAuth();
  return (
    <>
      {isOpen && (
        <EditContact isOpen={isOpen} onClose={onClose} contact={contact} />
      )}
      <Card maxW={56} minW={56} alignItems={"center"}>
        <CardBody
          p={"10px 10px 0 10px"}
          w={"full"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
        >
          <Avatar
            borderRadius={"10px"}
            size={"xl"}
            name={contact.name}
            src={contact.imageUrl}
          />

          <Stack mt={4} w={"full"} spacing={4}>
            <Heading textAlign={"center"} as={"h3"} fontSize={"xl"}>
              {contact.name}
            </Heading>
            <HStack>
              <Icon as={FaMobile} />
              <Text fontSize={"sm"}>{contact.phones[0].telephone}</Text>
            </HStack>
            <HStack w={"100%"}>
              <Icon as={FaEnvelope} />
              <Text noOfLines={1} fontSize={"sm"} w={"100%"}>
                {contact.emails[0].email}{" "}
              </Text>
            </HStack>
          </Stack>
        </CardBody>
        <CardFooter mt={4} p={"0 10px 10px 10px"} gap={4}>
          <Button onClick={() => deleteContacts(contact.id, token)}>
            Excluir
          </Button>
          <Button onClick={onOpen}>Editar</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Cards;
