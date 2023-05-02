import { Box, Image } from "@chakra-ui/react";
import foto from "../../../../assets/Password-cuate.png";

const LeftSide = () => {
  return (
    <Box
      as={"section"}
      display={["none", "none", "unset", "unset"]}
      boxSize={["sm", "sm", "md", "md"]}
      w={"50%"}
    >
      <Image src={foto} rounded={"md"} shadow={"lg"} />
    </Box>
  );
};

export default LeftSide;
