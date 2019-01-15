// Core
import "@babel/polyfill";
import React, { Component } from "react";

// Instruments
import axios from "axios";
import { hot } from "react-hot-loader";
import Modal from "react-modal";
import { API_URL as URL } from "./../../instruments/helpers";
import Styles from "./styles.m.css";

//Components
import Header from "components/Header";
import Assignment from "components/Assignment";
import About from "components/About";
import Relationships from "components/Relationships";
import Requirements from "components/Requirements";
import Users from "components/Users";
import RegistrationForm from "components/RegistrationForm";
import Footer from "components/Footer";

Modal.setAppElement("#app");

@hot(module)
export default class App extends Component {
  state = {
    showModal: false,
    users: [],
    nextUrl: "",
    numberOfDisplayedUsers: null,
  };

  componentDidMount = async() => {
    this._getWindowWidth();
  }

  _getWindowWidth = () => {
    this.setState({ 
      numberOfDisplayedUsers: window.innerWidth <= 480 ? 3 : 6,
    });
  };

  _usersFetch = async event => {
    if (event) event.preventDefault();
    const { nextUrl, numberOfDisplayedUsers } = this.state;
    const url = nextUrl ? nextUrl : `${URL}/users?page=1&count=${numberOfDisplayedUsers}`;
    try {
      const response = await axios({
        method: "GET",
        url
      });

      if (response.status === 200) {
        const {
          data: {
            users: newUsers,
            links: { next_url: nextUrl }
          }
        } = response;
        this.setState(({ users }) => ({
          users: [...users, ...newUsers],
          nextUrl
        }));
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  _handleOpenModalAndFetch = async event => {
    if (event) event.preventDefault();
    const { numberOfDisplayedUsers } = this.state;
    const url = `${URL}/users?page=1&count=${numberOfDisplayedUsers}`;
    try {
      const response = await axios({
        method: "GET",
        url
      });

      if (response.status === 200) {
        const {
          data: {
            users,
            links: { next_url: nextUrl }
          }
        } = response;
        this.setState({
          users,
          nextUrl,
          showModal: true
        });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  _handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    const { showModal, users, nextUrl, numberOfDisplayedUsers } = this.state;
    return (
            <>
              <Modal
                isOpen={showModal}
                onRequestClose={this._handleCloseModal}
                className={Styles.modal}
                overlayClassName={Styles.overlay}
              >
                <h4>Congratulations</h4>
                <p>You have successfully passed the registration</p>
                <a href="#" onClick={this._handleCloseModal}>
                  OK
                </a>
              </Modal>
              <Header />
              <Assignment />
              <About />
              <Relationships />
              <Requirements />
              {numberOfDisplayedUsers && <Users users={users} nextUrl={nextUrl} _usersFetch={this._usersFetch} />}
              <RegistrationForm
                _handleOpenModalAndFetch={this._handleOpenModalAndFetch}
              />
              <Footer />
            </>
    )
  }
}
