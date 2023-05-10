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
    excluir: {
      w: "100px",
      bg: "grey.400",
      color: "grey.100",
      fontSize: "16px",
      fontWeight: "normal",
      border: "1px ",
      borderColor: "grey.400",
      _hover: { bg: "red.600", color: "grey.100", borderColor: "red.600" },
    },
  },

  defaultProps: {},
});

export default cuttonTheme;
