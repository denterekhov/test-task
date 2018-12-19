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
    nextUrl: ""
  };

  _usersFetch = async event => {
    if (event) event.preventDefault();
    const { nextUrl } = this.state;
    const url = nextUrl ? nextUrl : `${URL}/users?page=1&count=6`;
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
      console.log(err.message);
    }
  };

  _handleOpenModalAndFetch = async event => {
    if (event) event.preventDefault();
    const url = `${URL}/users?page=1&count=6`;
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
      console.log(err.message);
    }
  };

  _handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    const { showModal, users, nextUrl } = this.state;
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
        <Users users={users} nextUrl={nextUrl} _usersFetch={this._usersFetch} />
        <RegistrationForm
          _handleOpenModalAndFetch={this._handleOpenModalAndFetch}
        />
        <Footer />
      </>
    );
  }
}
