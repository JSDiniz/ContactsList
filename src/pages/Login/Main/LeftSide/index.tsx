import { Box, Image } from "@chakra-ui/react";
import foto from "../../../../assets/Password-cuate.png";

const LeftSide = () => {
  return (
    <Box
      display={["none", "none", "unset", "unset"]}
      boxSize={["sm", "sm", "md", "md"]}
      w={"full"}
      h={"full"}
      pr={["10px", "10px", "0", "0"]}
      order={["2", "2", "1", "1"]}
    >
      <Image src={foto} rounded={"md"} shadow={"lg"} />
    </Box>
  );
};

export default LeftSide;
