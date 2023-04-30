import { Box, Image, SlideFade } from "@chakra-ui/react";
import foto from "../../../../assets/Select-pana.png";

const LeftSide = () => {
  return (
    <Box
      boxSize={["sm", "sm", "md", "md"]}
      w={"full"}
      h={"full"}
      pr={["10px", "10px", "0", "0"]}
    >
      <Image src={foto} rounded={"md"} shadow={"lg"} />
    </Box>
  );
};

export default LeftSide;
