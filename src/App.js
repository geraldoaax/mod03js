import React from "react";
import { Provider } from "react-redux";
import "./config/ReacotronConfig";

import store from "./store";
import TodoList from "./TodoList";

console.tron.log("testando");

const App = () => (
  //usa a API de context do React (estudar depois)
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
