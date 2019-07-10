export const addFavoriteRequest = repository => ({
  type: "ADD_FAVORITE",
  payload: { repository }
}); //action chamada pelo Main ouvida pelo Saga

//REQUEST -> SAGA -> CHAMADA API/RETORNO -> SUCCESS (novo fluxo saga)

export const addFavoriteSucess = data => ({
  type: "ADD_FAVORITE_SUCESS",
  payload: { data }
}); //Ouvido pelo reducer e add as informações
