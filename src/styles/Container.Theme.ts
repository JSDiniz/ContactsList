import { chakra } from "@chakra-ui/react";

const Section = chakra("section", {
  baseStyle: {
    maxW: "1024px",
    w: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    m: { base: "0 10px", md: "0 30px", lg: "0" },
  },
});

export default Section;
