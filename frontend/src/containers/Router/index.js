import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from "../LoginPage";

const routes = {
  root: "/"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={HomePage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
