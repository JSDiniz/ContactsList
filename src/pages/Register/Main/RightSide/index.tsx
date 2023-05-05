import { Box, Image } from "@chakra-ui/react";
import foto from "../../../../assets/Register.png";

const RightSide = () => {
  return (
    <Box
      display={["none", "none", "unset", "unset"]}
      boxSize={["sm", "sm", "md", "md"]}
      w={"50%"}
    >
      <Image src={foto} rounded={"md"} shadow={"lg"} />
    </Box>
  );
};

export default RightSide;
