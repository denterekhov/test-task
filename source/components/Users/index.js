// Core
import React, { Component } from "react";
import { array, string, func } from 'prop-types';
import ReactOverflowTooltip from 'react-overflow-tooltip';

// Instruments
import Styles from "./styles.m.css";

export default class Users extends Component {
  static propTypes = {
    users: array.isRequired,
    nextUrl: string.isRequired,
    _usersFetch: func.isRequired,
  }

  componentDidMount() {
    this.props._usersFetch();
  }

  render() {
    const { users, nextUrl, _usersFetch } = this.props;
    const userList = users.map(user => {
      const { id, email, name, phone, photo, position } = user;
      const formattedPhoneNumber = `
        ${phone.slice(0, 3)} 
        (${phone.slice(3, 6)}) 
        ${phone.slice(6, 9)} 
        ${phone.slice(9, 11)} 
        ${phone.slice(11, 13)}
      `;
      return (
        <div className={Styles.userItem} key={id}>
          <div className={Styles.userPhotoContainer}>
            <img
              className={Styles.userPhoto}
              src={photo}
              srcSet={`${photo} 1x, ${photo} 2x`}
              alt={name}
            />
          </div>
          <div className={Styles.userInfo}>
            <ReactOverflowTooltip title={name}>
              <h5>{name}</h5>
            </ReactOverflowTooltip>
            <p>{position}</p>
            <ReactOverflowTooltip title={email}>
              <a href={`mailto:${email}`}>{email}</a>
            </ReactOverflowTooltip>
            <p>{formattedPhoneNumber}</p>
          </div>
        </div>
      );
    });

    return (
      <section id="users" className={Styles.users}>
        <div className="container">
          <h2>Our cheerful users</h2>
          <h4>Attention! Sorting users by registration date</h4>
          <div className={Styles.userList}>{userList}</div>
          {nextUrl && (
            <a className={Styles.getMoreUsers} href="#" onClick={_usersFetch}>
              Show more
            </a>
          )}
        </div>
      </section>
    );
  }
}
