import { createStore, compose, applyMiddleware } from "redux";

import reducers from "./reducers";
//Passar os reducers aqui

//toda action disparada na aplicação vai para o Reactron.
const composer =
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(...[]),
        console.tron.createEnhancer()
      )
    : applyMiddleware(...[]);

const store = createStore(reducers, composer);

export default store;
