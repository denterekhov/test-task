// Core
import React, { Component } from 'react';
import { bool } from "prop-types";

// Instruments
import Styles from './styles.m.css';

export default class Spinner extends Component {
  static propTypes = {
    isFetching: bool.isRequired,
  };
  render () {
    const { isFetching } = this.props;
    return isFetching ? <div className = { Styles.spinner } /> : null;
  }
}
