import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ResponsiveDrawer from "../components/menu/Drawer";
import NotFound from "../pages/notfound/NotFound";
import InitialPage from "../pages/InitialPage";
import "../App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ResponsiveDrawer />
        <Switch>
          <Route exact path="/" component={InitialPage} />
          {/* <Route exact path="/" component={} /> */}

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
