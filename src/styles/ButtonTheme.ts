import { defineStyleConfig } from "@chakra-ui/react";

const cuttonTheme = defineStyleConfig({
  baseStyle: {},

  sizes: {},

  variants: {
    toEnter: {
      w: "262px",
      bg: "orange.600",
      color: "grey.100",
      fontSize: "16px",
      fontWeight: "normal",
      border: "1px ",
      borderColor: "orange.600",
      _hover: { bg: "transparent", color: "orange.600" },
    },
    register: {
      w: "262px",
      color: "orange.600",
      fontSize: "16px",
      fontWeight: "normal",
      border: "1px ",
      borderColor: "orange.600",
      _hover: { bg: "orange.600", color: "grey.100" },
    },
  },

  defaultProps: {},
});

export default cuttonTheme;
