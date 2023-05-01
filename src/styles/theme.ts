import { extendTheme } from "@chakra-ui/react";
import cuttonTheme from "./ButtonTheme";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  semanticTokens: {
    colors: {
      primary_bg: {
        _light: "grey2",
        _dark: "brand1",
      },
      primary_text: {
        _light: "grey1",
        _dark: "whiteFixed",
      },

      secondary_text: {
        _light: "brand1",
        _dark: "whiteFixed",
      },
    },
  },
  colors: {
    brand1: "#FF724c",
    brand2: "#ff983f",
    brand3: "#FDBF50",

    grey0: "#0A0A0B",
    grey1: "#1D1F21",
    grey2: "#2A2C41",
    grey3: "#929292",

    whiteFixed: "#F4F4F8",
  },
  components: {
    Button: cuttonTheme,
    Text: {
      variants: {
        "Heading-1-700": {
          fontWeight: "700",
          fontSize: "44px",
          lineHeight: "56px",
          color: "primary_text",
        },
        "Heading-2-600": {
          fontWeight: "600",
          fontSize: "36px",
          lineHeight: "45px",
          color: "primary_text",
        },
        "Heading-3-600": {
          fontWeight: "600",
          fontSize: "32px",
          lineHeight: "40px",
          color: "primary_text",
        },
        "Heading-3-500": {
          fontWeight: "500",
          fontSize: ["1.25rem", "1.45rem", "2rem"],
          lineHeight: "40px",
        },
      },
    },
    Link: {
      variants: {
        link: {
          padding: "8px 16px",
          bg: "transparent",
          color: "grey_scale.grey0",
          borderRadius: "base",
          fontWeight: "bold",
          _hover: {
            textDecoration: "none",
            bg: "grey_scale.grey8",
          },
        },
        outline1: {
          padding: "8px 16px",
          bg: "transparent",
          color: "grey_scale.grey0",
          borderRadius: "base",
          borderWidth: "1.5px",
          borderColor: "grey_scale.grey0",
          textAlign: "center",
          fontWeight: "bold",
          _hover: {
            textDecoration: "none",
          },
        },
      },
    },
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
        minW: "100vw",
        minH: "100vh",
        overflowX: "hidden",
      },
      "#root": {
        w: "100%",
        h: "100%",
        display: "flex",
        justifyContent: "center",
      },
    },
  },
});

const variants = () => {};

export default theme;
