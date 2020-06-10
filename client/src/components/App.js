import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import CssBaseline from "@material-ui/core/CssBaseline";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <CssBaseline />
        <NavBar />
        <div style={{ paddingTop: "69px", height: "100%" }}>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, false)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route
              exact
              path="/register"
              component={Auth(RegisterPage, false)}
            />
          </Switch>
        </div>
      </Suspense>
    </MuiThemeProvider>
  );
}

export default App;
