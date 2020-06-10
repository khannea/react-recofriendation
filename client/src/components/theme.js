import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#74B3CE",
    },
    secondary: {
      main: "#09BC8A",
    },
    warning: {
      main: "#ffbf0e",
    },
  },
});

export default theme;
