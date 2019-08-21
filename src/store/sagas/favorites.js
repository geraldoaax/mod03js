import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import Reactotron from "reactotron-react-js";

import { addFavoriteSucess } from "../actions/favorites";

export function* addFavorite(action) {
  //action recebe os payloads
  const { data } = yield call(api.get, `/repos/${action.payload.repository}`);
  //console.log(data);
  //pode concatenar outros parametros aqui
  //cps - usa como callback.. aqui usa a funcao do saga
  const repositoryData = {
    id: data.id,
    name: data.full_name,
    description: data.description,
    url: data.html_url
  };

  Reactotron.log(repositoryData);
  //buscar apenas as informações que queremos

  //chamar a action sucess
  yield put(addFavoriteSucess(repositoryData));
}
