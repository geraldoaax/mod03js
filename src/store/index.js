import { createStore, compose, applyMiddleware } from "redux";

import reducers from "./reducers";
//Passar os reducers aqui
const store = createStore(reducers, );

export default store;
