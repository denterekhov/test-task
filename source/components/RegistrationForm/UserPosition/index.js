// Core
import React, { Component } from 'react';

// Instruments
import cx from 'classnames';
import caretDown from '../../../theme/assets/icons/caret-down.svg';
import { API_URL as URL } from '../../../instruments/helpers';
import Styles from './styles.m.css';

export default class UserPosition extends Component {
  state = {
    positions:           [],
    isPositionListShown: false,
  };

  componentDidMount () {
    this._fetchUserPositions();
  }

  _fetchUserPositions = async () => {
    const url = `${URL}/positions`;

    try {
      const response = await fetch(url);

      if (response.status === 200) {
        const { positions } = await response.json();

        this.setState({
          positions: [...positions],
        });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  _handleShowPositionList = () => {
    this.setState(({ isPositionListShown }) => ({
      isPositionListShown: !isPositionListShown,
    }));
    this.props.form.setTouched({
      ...this.props.form.touched,
      positionId:   true,
      positionName: true,
    });
  };

  _handleMouseLeave = () => {
    this.setState({
      isPositionListShown: false,
    });
  };

  _handleSelectPosition = (event) => {
    this.props.form.setValues({
      ...this.props.form.values,
      positionId:   event.target.dataset.positionId,
      positionName: event.target.textContent,
    });
  };

  render () {
    const { positions, isPositionListShown } = this.state;
    const { positionId, positionName } = this.props.form.values;

    const positionListStyle = cx(Styles.positionList, {
      [Styles.hideMenu]: !isPositionListShown,
    });

    const positionNameStyle = cx(Styles.positionListItem, {
      [Styles.positionListItemSelected]: Boolean(positionName),
    });

    const positionsSelect = positions.map((position) => {
      const style =
        position.id === positionId
          ? positionNameStyle
          : Styles.positionListItem;

      return (
        <div
          className = { style }
          data-position-id = { position.id }
          key = { position.id }
          onClick = { this._handleSelectPosition }>
          {position.name}
        </div>
      );
    });

    return (
      <div
        className = { Styles.userPosition }
        onClick = { this._handleShowPositionList }
        onMouseLeave = { this._handleMouseLeave }>
        <div className = { Styles.positionListHeader }>
          {positionName ? positionName : 'Select your position'}
          <img src = { caretDown } />
        </div>
        <div className = { positionListStyle }>{positionsSelect}</div>
      </div>
    );
  }
}
