import { extendTheme } from "@chakra-ui/react";
import { ButtonTheme } from "./ButtonChakra";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  semanticTokens: {
    colors: {
      primary_100: {
        _light: "#ff6600",
        _dark: "#1d1f21",
      },
      primary_200: {
        _light: "#1d1f21",
        _dark: "#ff6600",
      },
      text: {
        _light: "#1d1f21",
        _dark: "#f5f5f5",
      },
      error: {},
    },
  },
  components: {
    Button: ButtonTheme,
  },
});

export default theme;

// primary_100: "#ff6600",
// primary_200: "#ff983f",
// primary_300: "#ffffa1",
// accent_100: "#f5f5f5",
// accent_200: "#929292",
// text_100: "#ffffff",
// text_200: "#e0e0e0",
// bg_100: "#1d1f21",
// bg_200: "#2c2e30",
// bg_300: "#444648",
