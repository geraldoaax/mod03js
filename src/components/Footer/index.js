import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Footer = ({ count }) => <p>Você tem {count} Favoritos</p>;

Footer.prototypes = {
  count: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  count: state.favorites.length
});
//fazer todos os cálculos dendo do mapStateToProps

export default connect(mapStateToProps)(Footer);
