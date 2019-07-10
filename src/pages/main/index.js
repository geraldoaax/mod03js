import React, { Component, Fragment } from "react";
import Proptypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as FavoriteActions from "../../store/actions/favorites";

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: Proptypes.func.isRequired,
    favorites: Proptypes.arrayOf(
      Proptypes.shape({
        id: Proptypes.number,
        name: Proptypes.string,
        description: Proptypes.string,
        url: Proptypes.string
      })
    ).isRequired
  };

  state = {
    repositoryInput: ""
  };

  handleAddRepository = event => {
    event.preventDefault();
    this.props.addFavoriteRequest(this.state.repositoryInput);
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>
        </form>

        <ul>
          {this.props.favorites.map(favorite => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name}</strong> ({favorite.description})
              </p>
              <a href={favorite.url}>Acessar</a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
