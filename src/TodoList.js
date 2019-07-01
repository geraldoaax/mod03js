import React, { Fragment } from "react";
import PropTypes from "prop-types";

//stateless components - componente sem estado
// não tem o state = {}
//stateFullComponent tem o estado dentro como state

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//aplica um dispatch nas actions
import * as TodoActions from "./store/actions/todos";

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Remover</button>
        </li>
      ))}
    </ul>
    <button onClick={() => addTodo("Pedalar")}>Adicionar</button>
  </Fragment>

  //sempre que estiver no map ter um id
);

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});
//mapea o estado em propriedades =todos para propriedades para componente

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);
//action para propriedades usa o dispatch

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
//high order component sintaxe

// STATE

/**
 * {
 *    todos: { ==> reducer
 *    loading: true/false,
 *    error
 *  },
 *    posts: ==> outro reducer
 *    auth: ==> outro reducer
 * }
 */
//Cada reducer representa um tipo de informação dentro da aplicação
