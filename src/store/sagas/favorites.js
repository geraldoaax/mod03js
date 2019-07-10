import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { addFavoriteSucess } from "../actions/favorites";

export function* addFavorite(action) {
  const { data } = yield call(api.get, `/repos/${action.payload.repository}`);
  const repositoryData = {
    id: data.id,
    name: data.full_name,
    description: data.description,
    url: data.html_url
  };

  //chamar a action sucess
  yield put(addFavoriteSucess(repositoryData));
}
