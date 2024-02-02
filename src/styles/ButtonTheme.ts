import { defineStyleConfig } from "@chakra-ui/react";

const cuttonTheme = defineStyleConfig({
  baseStyle: {},

  sizes: {},

  variants: {
    primary: {
      p: "20px 25px",
      w: ["full", "unset", "unset", "unset"],
      bg: "orange.600",
      color: "grey.100",
      fontSize: "16px",
      fontWeight: "normal",
      border: "1px ",
      borderColor: "orange.600",
      _hover: { bg: "transparent", color: "orange.600" },
    },

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

    NotFound: {
      p: "30px 25px",
      w: ["full", "unset", "unset", "unset"],
      color: "secondary_text",
      fontSize: "16px",
      fontWeight: "700",
      border: "1px ",
      borderColor: "secondary_text",
      _hover: {
        bg: "secondary_text",
        color: "NotFound_text",
        borderColor: "secondary_text",
      },
    },
  },

  defaultProps: {},
});

export default cuttonTheme;
