import React, { Fragment } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Footer from "../components/Footer";

import Main from "../pages/main";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
        {/* procura a rota exata mencionada */}
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
