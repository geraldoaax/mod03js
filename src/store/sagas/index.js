import { all, takeLatest } from "redux-saga/effects";
//takeLatest se tiver uma requisição ele cancela e pega a ultima do user (otimiza)
import { addFavorite } from "./favorites";

export default function* rootSaga() {
  //* representa uma função generator no JS (Sync - parecido Async/Await+)
  yield all([takeLatest("ADD_FAVORITE_REQUEST", addFavorite)]);
  //all é usado para lidar com vários saga
}
