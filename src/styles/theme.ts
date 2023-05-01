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
        _light: "grey.100",
        _dark: "grey.600",
      },
      primary_text: {
        _light: "grey.600",
        _dark: "grey.100",
      },

      secondary_text: {
        _light: "orange.600",
        _dark: "grey.100",
      },
    },
  },
  colors: {
    yellow: {
      400: "#FDBF50",
    },

    red: {
      600: "#DF1545",
    },

    green: {
      600: "#168821",
    },
    orange: {
      400: "#ff983f",
      600: "#FF724c",
    },

    grey: {
      50: "#FFFFFF",
      100: "#F4F4F8",
      200: "#E0E0E4",
      300: "#D4D4D4",
      400: "#929292",
      500: "#2A2C41",
      600: "#1D1F21",
      700: "#0A0A0B",
    },
  },
  components: {
    Button: cuttonTheme,
    Text: {
      variants: {
        "Heading-1-700": {
          fontWeight: "700",
          fontSize: "44px",
          lineHeight: "56px",
        },
        "Heading-2-600": {
          fontWeight: "600",
          fontSize: "36px",
          lineHeight: "45px",
        },
        "Heading-3-600": {
          fontWeight: "600",
          fontSize: "32px",
          lineHeight: "40px",
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

  fonts: {
    heading: '"IBM Plex Sans", sans-serif;',
    body: '"Inter", sans-serif',
  },

  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },

  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  styles: {
    global: {
      "html, body": {
        minW: "100vw",
        minH: "100vh",
        bg: "primary_bg",
        color: "primary_text",
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
