// Core
import '@babel/polyfill';
import React, { Component } from 'react';

// Instruments
import { hot } from 'react-hot-loader';
import Modal from 'react-modal';
import { API_URL as URL } from './../../instruments/helpers';
import Styles from './styles.m.css';

//Components
import Spinner from 'components/Spinner';
import Header from 'components/Header';
import Assignment from 'components/Assignment';
import About from 'components/About';
import Relationships from 'components/Relationships';
import Requirements from 'components/Requirements';
import Users from 'components/Users';
import RegistrationForm from 'components/RegistrationForm';
import Footer from 'components/Footer';

Modal.setAppElement('#app');

@hot(module)
export default class App extends Component {
  state = {
    showModal:              false,
    users:                  [],
    nextUrl:                '',
    numberOfDisplayedUsers: null,
    isFetching:             false,
  };

  componentDidMount = async () => {
    await this._getWindowWidth();
  };

  _getWindowWidth = () => {
    this.setState({
      numberOfDisplayedUsers: window.innerWidth <= 480 ? 3 : 6,
    });
  };

  _setIsFetching = (isFetching) => {
    this.setState({
      isFetching,
    });
  };

  _usersFetch = async (event) => {
    if (event) {
      event.preventDefault();
    }
    const { nextUrl, numberOfDisplayedUsers } = this.state;
    const url = nextUrl
      ? nextUrl
      : `${URL}/users?page=1&count=${numberOfDisplayedUsers}`;

    this._setIsFetching(true);
    try {
      const response = await fetch(url);

      if (response.status === 200) {
        const {
          users: newUsers,
          links: { next_url: nextUrl },
        } = await response.json();

        this.setState(({ users }) => ({
          users: [...users, ...newUsers],
          nextUrl,
        }));
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      this._setIsFetching(false);
    }
  };

  _handleOpenModalAndFetch = async (event) => {
    if (event) {
      event.preventDefault();
    }
    const { numberOfDisplayedUsers } = this.state;
    const url = `${URL}/users?page=1&count=${numberOfDisplayedUsers}`;

    try {
      const response = await fetch(url);

      if (response.status === 200) {
        const {
          users,
          links: { next_url: nextUrl },
        } = await response.json();

        this.setState({
          users,
          nextUrl,
          showModal: true,
        });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  _handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render () {
    const {
      showModal,
      users,
      nextUrl,
      numberOfDisplayedUsers,
      isFetching,
    } = this.state;

    return (
      <>
        <Modal
          className = { Styles.modal }
          isOpen = { showModal }
          overlayClassName = { Styles.overlay }
          onRequestClose = { this._handleCloseModal }>
          <h4>Congratulations</h4>
          <p>You have successfully passed the registration</p>
          <a href = '#' onClick = { this._handleCloseModal }>
            OK
          </a>
        </Modal>
        <Spinner isFetching = { isFetching } />
        <Header />
        <Assignment />
        <About />
        <Relationships />
        <Requirements />
        {numberOfDisplayedUsers && (
          <Users
            _usersFetch = { this._usersFetch }
            nextUrl = { nextUrl }
            users = { users }
          />
        )}
        <RegistrationForm
          _handleOpenModalAndFetch = { this._handleOpenModalAndFetch }
          _setIsFetching = { this._setIsFetching }
        />
        <Footer />
      </>
    );
  }
}
