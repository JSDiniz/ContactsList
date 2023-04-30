import { chakra } from "@chakra-ui/react";

const Section = chakra("section", {
  baseStyle: {
    maxW: "1024px",
    w: "full",
    m: { base: "0 10px", md: "0 20px", xl: "0" },
    overflow: "hidden",
  },
});

export default Section;
