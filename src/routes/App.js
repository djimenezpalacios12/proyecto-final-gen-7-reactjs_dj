import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ResponsiveDrawer from "../components/menu/Drawer";
import NotFound from "../pages/notfound/NotFound";
import InitialPage from "../pages/InitialPage";
import Cartelera from "../pages/cartelera/Cartelera";
import Populares from "../pages/populares/Populares";
import Drama from "../pages/drama/Drama";
import Infantiles from "../pages/infantiles/Infantiles";
import Estadisticas from "../pages/estadisticas/Estadisticas";

import "../App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ResponsiveDrawer />
        <Switch>
          <Route exact path="/" component={InitialPage} />
          <Route exact path="/cartelera" component={Cartelera} />
          <Route exact path="/populares" component={Populares} />
          <Route exact path="/drama" component={Drama} />
          <Route exact path="/infantiles" component={Infantiles} />
          <Route exact path="/estadisticas" component={Estadisticas} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
