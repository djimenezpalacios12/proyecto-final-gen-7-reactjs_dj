import React from "react";
import { Switch, Route } from "react-router-dom";
import Portada from "./pages/Portada";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Portada} />
    </Switch>
  );
};

export default App;
