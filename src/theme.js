import { createMuiTheme } from "@material-ui/core/styles";
import { red, blueGrey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[700],
    },
    secondary: {
      main: red[900],
    },
    textColor: {
      main: blueGrey[50],
    },
    type: "dark",
  },
});

export default theme;
