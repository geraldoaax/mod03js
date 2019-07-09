import React from "react";
import { Provider } from "react-redux";
import "./config/ReacotronConfig";

import store from "./store";

import Routes from "./routes";

const App = () => (
  //usa a API de context do React (estudar depois)
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
