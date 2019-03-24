// Core
import React, { Component } from 'react';
import { array, bool, func } from 'prop-types';
import ReactOverflowTooltip from 'react-overflow-tooltip';

// Instruments
import cx from 'classnames';
import Styles from './styles.m.css';

export default class Users extends Component {
  static propTypes = {
    _usersFetch: func.isRequired,
    isFetching:  bool.isRequired,
    users:       array.isRequired,
  };

  componentDidMount () {
    this.props._usersFetch();
  }

  render () {
    const { users, nextUrl, _usersFetch, isFetching } = this.props;
    const fetchMoreUsersStyle = cx(Styles.getMoreUsers, {
      [Styles.isDisabled]: isFetching,
    });

    const userList = users.map((user) => {
      const { id, email, name, phone, photo, position } = user;
      const formattedPhoneNumber = `
        ${phone.slice(0, 3)} 
        (${phone.slice(3, 6)}) 
        ${phone.slice(6, 9)} 
        ${phone.slice(9, 11)} 
        ${phone.slice(11, 13)}
      `;

      return (
        <div className = { Styles.userItem } key = { id }>
          <div className = { Styles.userPhotoContainer }>
            <img
              alt = { name }
              className = { Styles.userPhoto }
              src = { photo }
              srcSet = { `${photo} 1x, ${photo} 2x` }
            />
          </div>
          <div className = { Styles.userInfo }>
            <ReactOverflowTooltip title = { name }>
              <h5>{name}</h5>
            </ReactOverflowTooltip>
            <p>{position}</p>
            <ReactOverflowTooltip title = { email }>
              <a href = { `mailto:${email}` }>{email}</a>
            </ReactOverflowTooltip>
            <p>{formattedPhoneNumber}</p>
          </div>
        </div>
      );
    });

    return (
      <section className = { Styles.users } id = 'users'>
        <div className = 'container'>
          <h2>Our cheerful users</h2>
          <h4>Attention! Sorting users by registration date</h4>
          <div className = { Styles.userList }>{userList}</div>
          {nextUrl && (
            <a className = { fetchMoreUsersStyle } href = '#' onClick = { _usersFetch }>
              Show more
            </a>
          )}
        </div>
      </section>
    );
  }
}
