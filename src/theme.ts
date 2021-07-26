import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#080708",
      light: "#413941",
    },
    secondary: {
      main: "rgba(0, 143, 17, 1)",
      light: "rgba(0, 143, 17, 0.7)",
    },
    info: {
      main: "#724A22",
      light: "#DBB188",
    },
    text: {
      primary: "#FFF",
    },
  },
});
