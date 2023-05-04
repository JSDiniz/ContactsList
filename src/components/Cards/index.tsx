import {
  HStack,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { FaEnvelope, FaLock, FaUser, FaMobile, FaCamera } from "react-icons/fa";
import { useAuth } from "../../contexts/Auth";

const Cards = () => {
  const { user } = useAuth();

  return (
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
          name={user.contacts[0].name}
          src={user.contacts[0].imageUrl}
        />

        <Stack alignItems={"center"} mt={4} w={"full"} spacing={4}>
          <Heading as={"h3"} fontSize={"xl"}>
            {user.contacts[0].name}
          </Heading>
          <HStack>
            <Icon as={FaMobile} />
            <Text fontSize={"xm"}>{user.contacts[0].phones[0].telephone}</Text>
          </HStack>
          <HStack>
            <Icon as={FaEnvelope} />
            <Text fontSize={"xm"}>{user.contacts[0].emails[0].email}</Text>
          </HStack>
        </Stack>
      </CardBody>
      <CardFooter mt={4} p={"0 10px 10px 10px"}>
        <Button>Contacts</Button>
      </CardFooter>
    </Card>
  );
};

export default Cards;
