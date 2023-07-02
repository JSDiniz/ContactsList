import {
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
import Section from "../../styles/ContainerTheme";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useHistory } from "react-router-dom";
import notFound from "../../assets/404-not-Found.png";

export const PageNotFound = () => {
  const history = useHistory();

  return (
    <Section>
      <Header />
      <Stack
        as={"main"}
        minH="calc(100vh - 5rem - 3.125rem)"
        align={"center"}
        justify={"center"}
        gap={"4"}
      >
        <Heading
          as={"h1"}
          letterSpacing={"0.3rem"}
          size={"4xl"}
          fontWeight={"700"}
          color={"secondary_text"}
        >
          404
        </Heading>
        <Box maxW={"500px"}>
          <Image
            w={"100%"}
            objectFit={"cover"}
            src={notFound}
            alt="Page not Found"
          />
        </Box>
        <Text color={"gray.400"} fontSize={["xs", "md", "md", "md"]}>
          Não encotramos a página que você procurou, <br />
          <Text as="span" color={"secondary_text"}>
            vamos tentar novamente.
          </Text>
        </Text>
        <Button variant={"NotFound"} onClick={() => history.push("/")}>
          Ir para painel principal
        </Button>
      </Stack>
      <Footer />
    </Section>
  );
};
