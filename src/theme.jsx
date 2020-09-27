import { createMuiTheme } from "@material-ui/core/styles";

export const desktop_header_height = 600;
export const content_max_width = 960;
const primary = "#02ccfe";
const primary_5 = "rgb(2 204 254 / .5)";
const secondary = "#51cc93";
const tertiary = "rgb(5 32 36)";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    tertiary: {
      main: tertiary,
    },
    background: {
      default: "rgb(255,255,255)",
    },
  },
  shape: {},
  typography: {
    body1: {
      fontSize: ".8rem",
    },
    body2: {
      color: "rgb(5 32 36 / 44%)",
      fontFamily: "Arial",
      fontSize: ".5rem",
      lineHeight: 1.1,
      "& span": {
        fontSize: ".2rem",
        marginBottom: 2,
      },
    },
    h1: {
      fontSize: "3rem",
      fontStyle: "italic",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "2.75rem",
      fontWeight: "bold",
      marginBottom: 32,
    },
    h3: {
      fontWeight: "bold",
    },
    h4: {
      color: "rgb(5 32 36 / 60%)",
      fontSize: "1rem",
      fontStyle: "italic",
    },
    h5: {
      color: "rgb(5 32 36)",
      fontSize: "1.1rem",
      fontWeight: "bold",
    },
    h6: {
      fontSize: 12,
      lineHeight: 0.8,
    },
    subtitle1: {
      fontSize: ".75rem",
      lineHeight: 1.21,
      "& span": {
        color: "gray",
        fontWeight: "bold",
      },
    },
  },
  overrides: {
    MuiInputLabel: {
      outlined: {
        color: "white",
        transform: "translate(14px, 12px) scale(1)",
        textShadow: "1px 0px 2px rgb(255 255 255 / .6)",
        fontStyle: "italic",
      },
      shrink: {
        color: primary + " !important",
        textShadow: "none !important",
      },
    },
    MuiOutlinedInput: {
      input: {
        color: "white",
        padding: 10,
        textShadow: "1px 0px 2px rgb(255 255 255 / .6)",
      },
      notchedOutline: {
        borderColor: primary_5,
        borderRadius: 4,
      },
      root: {
        background: "rgb(5 32 36 / .7)",
      },
    },
  },
});

export default theme;
