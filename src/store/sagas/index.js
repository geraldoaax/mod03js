//import Reactotron from "reactotron-react-js";
//import createSagaMiddleware from "redux-saga";

import { all, takeLatest } from "redux-saga/effects";
//takeLatest se tiver uma requisição ele cancela e pega a ultima do user (otimiza)
//adimite apenas a ultima requisição (diferente de takeEvery - vai cascateando)
import { addFavorite } from "./favorites";
//importa a action

export default function* rootSaga() {
  //* representa uma função generator no JS (Sync - parecido Async/Await+)
  yield all([takeLatest("ADD_FAVORITE_REQUEST", addFavorite)]);
  //primeiro parametro é o type do action (toda vez q ele é disparado dispara o addFavorite)
  //all é usado para lidar com vários saga
}

// create our new saga monitor
//const sagaMonitor = Reactotron.createSagaMonitor();

// and in your call to createSagaMiddlware, pass it along inside
// the 1st parameter's object.
//const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
