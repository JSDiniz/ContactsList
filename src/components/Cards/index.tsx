import {
  Card,
  Icon,
  Text,
  Link,
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
import { FaEnvelope, FaMobile, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsLayoutTextWindow } from "react-icons/bs";
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
      <Card p={"10px"} maxW={56} minW={56} h={"341px"} alignItems={"center"}>
        <CardBody
          p={"0"}
          w={"full"}
          h={"full"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          gap={"4"}
        >
          <Avatar
            borderRadius={"10px"}
            size={"xl"}
            name={contact.name}
            src={
              contact?.githubUrl! !== ""
                ? `${contact?.githubUrl!}.png`
                : contact?.imageUrl!
            }
          />

          <Stack
            w={"full"}
            h={"full"}
            justifyContent={"space-evenly"}
            gap={"4"}
          >
            <Heading
              textAlign={"center"}
              as={"h3"}
              fontSize={"xl"}
              noOfLines={2}
            >
              {contact.name}
            </Heading>
            <HStack>
              <Icon as={FaMobile} />
              <Text fontSize={"sm"}>{contact.phones[0].phone}</Text>
            </HStack>
            <HStack w={"100%"}>
              <Icon as={FaEnvelope} />
              <Text noOfLines={1} fontSize={"sm"} w={"100%"}>
                {contact.emails[0].email}{" "}
              </Text>
            </HStack>
          </Stack>
          <HStack w={"full"} justifyContent={"center"} gap={"4"}>
            {contact?.githubUrl! !== "" && (
              <Link href={`${contact?.githubUrl!}`} isExternal>
                <Icon as={FaGithub} w={8} h={8} />
              </Link>
            )}
            {contact?.linkedinUrl! !== "" && (
              <Link href={`${contact?.linkedinUrl!}`} isExternal>
                <Icon as={FaLinkedin} w={8} h={8} />
              </Link>
            )}
            {contact?.portfolioUrl! !== "" && (
              <Link href={`${contact?.portfolioUrl!}`} isExternal>
                <Icon as={BsLayoutTextWindow} w={8} h={8} />
              </Link>
            )}
          </HStack>
        </CardBody>
        <CardFooter mt={4} p={"0"} gap={4}>
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
