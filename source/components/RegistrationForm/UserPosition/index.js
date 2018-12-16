// Core
import React, { Component } from "react";
import PropTypes from 'prop-types'

// Instruments
import cx from "classnames";
import axios from "axios";
import caretDown from "../../../theme/assets/icons/caret-down.svg";
import { API_URL as URL } from "../../../instruments/helpers";
import Styles from "./styles.m.css";

export default class UserPosition extends Component {
  static propTypes = {
    position_id: PropTypes.string.isRequired,
    positionName: PropTypes.string.isRequired,
    _handleSelectPosition: PropTypes.func.isRequired,
  }

  state = {
    positions: [],
    isPositionListShown: false
  };

  componentDidMount() {
    this._fetchUserPositions();
  }

  _fetchUserPositions = async () => {
    const url = `${URL}/positions`;
    try {
      const response = await axios({
        method: "GET",
        url
      });

      if (response.status === 200) {
        const {
          data: { positions }
        } = response;
        this.setState({
          positions: [...positions]
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  _handleShowPositionList = () => {
    this.setState(({ isPositionListShown }) => ({
      isPositionListShown: !isPositionListShown
    }));
  };

  render() {
    const { positions, isPositionListShown } = this.state;
    const { position_id, positionName, _handleSelectPosition } = this.props;

    const positionListStyle = cx(Styles.positionList, {
      [Styles.hideMenu]: !isPositionListShown
    });

    const positionNameStyle = cx(Styles.positionListItem, {
      [Styles.positionListItemSelected]: !!positionName
    });

    const positionsSelect = positions.map(position => {
      const style =
        position.id === position_id
          ? positionNameStyle
          : Styles.positionListItem;
      return (
        <div
          className={style}
          key={position.id}
          data-position-id={position.id}
          onClick={_handleSelectPosition}
        >
          {position.name}
        </div>
      );
    });

    return (
      <div
        className={Styles.userPosition}
        id="positions"
        onClick={this._handleShowPositionList}
      >
        <div className={Styles.positionListHeader}>
          {positionName ? positionName : "Select your position"}
          <img src={caretDown} />
        </div>
        <div className={positionListStyle}>{positionsSelect}</div>
      </div>
    );
  }
}
