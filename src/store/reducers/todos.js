//reducer ouve sempre que uma action for disparada
//action = gatilho dentro do redux que avisa os reducers que
// alguma açao terminou ou deve ser feita

const INITIAL_STATE = [
  { id: 1, text: "Fazer Café" },
  { id: 2, text: "Estudar React" }
];

export default function todos(state = INITIAL_STATE, action) {
  //state => estado da aplicação antes do action
  // ['fazer Cafe', 'Estudar React] =>Estado anterior
  // addTodo('Entrar na Comunidade) --> this.setState
  // toda action tem uma informação que chama type
  //type = Id da Action (addTodo, removeTodo)

  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Math.random(), text: action.payload.text }];
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state; //padrão deixar o default para retornos
  }
}
