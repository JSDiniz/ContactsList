import { defineStyleConfig } from "@chakra-ui/react";

const cuttonTheme = defineStyleConfig({
  baseStyle: {},

  sizes: {},

  variants: {
    toEnter: {
      w: "262px",
      bg: "brand1",
      color: "whiteFixed",
      fontSize: "16px",
      fontWeight: "normal",
      border: "2px ",
      borderColor: "brand1",
      _hover: { bg: "transparent", color: "brand1" },
    },
    register: {
      w: "262px",
      color: "brand1",
      fontSize: "16px",
      fontWeight: "normal",
      border: "2px ",
      borderColor: "brand1",
      _hover: { bg: "brand1", color: "whiteFixed" },
    },
  },

  defaultProps: {},
});

export default cuttonTheme;
