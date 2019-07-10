import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddlware from "redux-saga";

import reducers from "./reducers";
import sagas from "./sagas";

const middlewares = [];
const sagaMiddleware = createSagaMiddlware();

middlewares.push(sagaMiddleware);
//Passar os reducers aqui

//toda action disparada na aplicação vai para o Reactron.
const composer =
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(...middlewares),
        console.tron.createEnhancer()
      )
    : applyMiddleware(...middlewares);

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
