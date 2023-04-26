import { extendTheme } from "@chakra-ui/react";
import ButtonTheme from "./ButtonTheme";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  semanticTokens: {
    colors: {
      primary_cor: {
        _light: "grey2",
        _dark: "brand1",
      },
    },
  },
  colors: {
    brand1: "#FF6600",
    brand2: "#ff983f",

    grey0: "#0A0A0B",
    grey1: "#1D1F21",
    grey2: "#2c2e30",
    grey3: "#444648",
    grey4: "#929292",
    grey5: "#e0e0e0",

    whiteFixed: "#ffffff",
  },
  components: {
    Button: ButtonTheme,
  },
  sizes: {
    container: "75rem",
    containerTablet: "40rem",
  },
  fonts: {
    titles: '"IBM Plex Sans", sans-serif;',
    texts: '"Inter", sans-serif',
  },
  fontSizes: {
    title1: "2.75rem",
    title2: "1.75rem",
    title3: "1.50rem",
    title4: "1.25rem",
    text1: "1rem",
    text2: "0.875rem",
  },
  lineHeights: {
    title1: "3.8rem",
    title2: "2.75rem",
    title3: "2.5rem",
    title4: "1.25rem",
    text1: "1.75rem",
    text2: "1.75rem",
  },

  styles: {
    global: {
      "html, body": {
        fontFamily: "texts",
      },
    },
  },
});

export default theme;
