import { createMuiTheme } from "@material-ui/core/styles";

export const desktop_header_height = 600;
export const content_max_width = 960;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#02ccfe",
    },
    secondary: {
      main: "#51cc93",
    },
    tertiary: {
      main: "rgb(5 32 36)",
    },
    background: {
      default: "rgb(255,255,255)",
    },
  },
  shape: {
    borderRadius: 24,
  },
  typography: {
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
    h5: {
      color: "rgb(5 32 36)",
      fontSize: "1.1rem",
      fontWeight: "bold",
    },
    h6: {
      fontSize: 12,
      lineHeight: 0.8,
    },
  },
});

export default theme;
