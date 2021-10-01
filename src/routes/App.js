import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ResponsiveDrawer from "../components/Drawer";
import InitialPage from "../pages/InitialPage";
import SecondPage from "../pages/SecondPage";
import "../App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ResponsiveDrawer />
        <Switch>
          <Route exact path="/" component={InitialPage} />
          <Route exact path="/second" component={SecondPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
