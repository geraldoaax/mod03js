export const addTodo = text => ({
  type: "ADD_TODO",
  payload: { text }
}); //reducers ouvem o que etá no dispatch, type obrigatória

export const removeTodo = id => ({
  type: "REMOVE_TODO", //importante o nome ser igual da ação
  payload: { id }
}); //reducers ouvem o que etá no dispatch, type obrigatória
