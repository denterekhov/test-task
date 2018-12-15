// Core
import React, { Component } from "react";

// Instruments
import axios from "axios";
import cx from "classnames";
import { API_URL as URL } from "./../../instruments/helpers";
import Styles from "./styles.m.css";

//Components
import UserPosition from "./UserPosition";

export default class RegistrationForm extends Component {
  state = {
    token: "",
    name: "",
    email: "",
    phone: "",
    position_id: "",
    positionName: "",
    photo: null,
    displayErrors: false
  };

  componentDidMount() {
    this._fetchToken();
  }

  _fetchToken = async () => {
    const url = `${URL}/token`;
    try {
      const response = await axios({
        method: "GET",
        url
      });

      if (response.status === 200) {
        const {
          data: { token }
        } = response;
        this.setState({
          token
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  _handleName = event => {
    this.setState({
      name: event.target.value.trim()
    });
  };

  _handleEmail = event => {
    this.setState({
      email: event.target.value.trim()
    });
  };

  _handlePhone = event => {
    this.setState({
      phone: event.target.value.trim()
    });
  };

  _handleSelectPosition = event => {
    const position_id = event.target.dataset.positionId;
    const positionName = event.target.textContent;
    this.setState({
      position_id,
      positionName
    });
  };

  _handleFileUpload = event => {
    const file = event.target.files[0];
    const extension = file.type.slice(-4);
    const img = new Image();

    img.onload = function() {
      const [width, height] = [img.width, img.height];
      if (width >= 70 && height >= 70) {
        saveFileToState();
      }
    };
    img.src = window.URL.createObjectURL(file);

    const saveFileToState = () => {
      if (file.size <= 5242880 && extension === "jpeg") {
        this.setState({
          photo: file
        });
      }
    };
  };

  _handleInvalid = event => {
    if (!event.target.validity.valid) {
      this.setState({
        displayErrors: true
      });
    }
  };

  _handleSubmit = async event => {
    event.preventDefault();
    this.setState({
      displayErrors: false
    });
    const { token, name, email, phone, position_id, photo } = this.state;
    const url = `${URL}/users`;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position_id", position_id);
    formData.append("photo", photo);

    try {
      const response = await axios({
        method: "POST",
        url: url,
        headers: {
          token: token,
          "Content-Type": "multipart/form-data"
        },
        data: formData
      });

      if (response.status === 201) {
        this.props._handleOpenModalAndFetch();
        this.setState(prevState => ({
          ...prevState,
          name: "",
          email: "",
          phone: "",
          position_id: "",
          positionName: "",
          photo: null
        }));
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    const {
      name,
      email,
      phone,
      position_id,
      positionName,
      photo,
      displayErrors
    } = this.state;
    const isFormFilled = name && email && phone && position_id && photo;
    const formStyle = cx({
      [Styles.displayErrors]: displayErrors
    });

    return (
      <section id="signup" className={Styles.registrationForm}>
        <div className="container">
          <h2>Register to get a work</h2>
          <h4>
            Attention! After successful registration and alert, update the list
            of users in the block from the top
          </h4>
          <form
            id="userForm"
            className={formStyle}
            onInvalid={this._handleInvalid}
            onSubmit={this._handleSubmit}
          >
            <div className={Styles.formContainer}>
              <div className={Styles.inputTextWrapper}>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  pattern="[a-zA-Z]{2,60}"
                  required
                  value={name}
                  onChange={this._handleName}
                />
                <label htmlFor="name">Name</label>
              </div>

              <div className={Styles.inputTextWrapper}>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  required
                  value={email}
                  onChange={this._handleEmail}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className={Styles.inputTextWrapper}>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+38 (___) ___ __ __"
                  pattern="^[\+]{0,1}380([0-9]{9})$"
                  required
                  value={phone}
                  onChange={this._handlePhone}
                />
                <label htmlFor="phone">Phone</label>
              </div>

              <UserPosition
                position_id={position_id}
                positionName={positionName}
                _handleSelectPosition={this._handleSelectPosition}
              />

              <div className={Styles.inputFileWrapper}>
                <input
                  id="fileUpload"
                  className={Styles.fileInput}
                  type="file"
                  required
                  onChange={this._handleFileUpload}
                  accept=".jpg,.jpeg"
                />
                <span className={Styles.fileName}>
                  {photo ? photo.name : "Upload your photo"}
                </span>
                <label htmlFor="fileUpload" className={Styles.fileUpload}>
                  Upload
                </label>
                <span className={Styles.fileUploadAssistiveText}>
                  File format jpg up to 5 MB, the minimum size of 70x70px
                </span>
              </div>
            </div>

            <input disabled={!isFormFilled} type="submit" value="Sign Up" />
          </form>
        </div>
      </section>
    );
  }
}
