import React from "react";
import theme from "./constants/theme";
import {ThemeProvider} from "@material-ui/core/styles";
import Router from "./routers/Router";

const App = () => {
    return(
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
    )
}

export default App;