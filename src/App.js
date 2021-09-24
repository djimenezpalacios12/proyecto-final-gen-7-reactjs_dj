import React from "react";
import { Switch, Route } from "react-router-dom";
import ResponsiveDrawer from "./components/Drawer";
import InitialPage from "./pages/intialPage/InitialPage";
import SecondPage from "./pages/SecondPage";

const App = () => {
  return (
    <div>
      <ResponsiveDrawer />
      <Switch>
        <Route exact path="/" component={InitialPage} />
        <Route exact path="/second" component={SecondPage} />
      </Switch>
    </div>
  );
};

export default App;
