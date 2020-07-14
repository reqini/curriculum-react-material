import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Routing from "./Routing";
import "./styles/global.scss";

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
    primary: {
      light: "#ffef62",
      main: "#ffeb3b",
      dark: "#b2a429",
      contrastText: "#000"
    },
    secondary: {
      light: "#5393ff",
      main: "#2979ff",
      dark: "#1c54b2",
      contrastText: "#FFFFFF"
    },
    textPrimary: {
      main: "#ffffff"
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Routing />
      </MuiThemeProvider>
    );
  }
}
export default App;
