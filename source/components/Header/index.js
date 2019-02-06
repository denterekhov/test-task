// Core
import React, { Component } from "react";

// Instruments
import cx from "classnames";
import { API_URL as URL } from "./../../instruments/helpers";
import Logo from "../../theme/assets/icons/logo.svg";
import Styles from "./styles.m.css";

//Components
import LogOut from "../../components/Icons/LogOut";

export default class Header extends Component {
  state = {
    email: "",
    name: "",
    photo: "",
    isSideMenuOpen: false
  };

  componentDidMount() {
    this._fetchCurrentUser();
  }

  _fetchCurrentUser = async () => {
    const url = `${URL}/users/1`;
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const {
          user: { email, name, photo }
        } = await response.json();
        this.setState({
          email,
          name,
          photo
        });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  _handleSideMenuStatus = () => {
    this.setState(({ isSideMenuOpen }) => ({
      isSideMenuOpen: !isSideMenuOpen
    }));
  };

  render() {
    const { email, name, photo, isSideMenuOpen } = this.state;
    const sideMenuStyle = cx(Styles.headerMenu, {
      [Styles.showSideMenu]: isSideMenuOpen,
      [Styles.hideSideMenu]: !isSideMenuOpen
    });

    const overlayStyle = cx(Styles.overlay, {
      [Styles.blocking]: isSideMenuOpen
    });

    return (
      <header className={Styles.header}>
        <div className={overlayStyle} onClick={this._handleSideMenuStatus} />
        <div className="container">
          <div className={Styles.flex_container}>
            <div>
              <img
                className={Styles.logo}
                src={Logo}
                alt="Logo"
              />
            </div>
            <div className={sideMenuStyle}>
              <nav>
                <ul>
                  <li>
                    <a href="#about">About me</a>
                  </li>
                  <li>
                    <a href="#relationships">Relationships</a>
                  </li>
                  <li>
                    <a href="#requirements">Requirements</a>
                  </li>
                  <li>
                    <a href="#users">Users</a>
                  </li>
                  <li>
                    <a href="#signup">Sign Up</a>
                  </li>
                  <li className={Styles.hiddenListItem}>
                    <a href="#">Sign Out</a>
                  </li>
                </ul>
              </nav>
              {email && <div className={Styles.currentUser}>
                <div className={Styles.userInfo}>
                  <p>{name}</p>
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
                <img
                  className={Styles.userAvatar}
                  src={photo}
                  srcSet={`${photo} 1x, ${photo} 2x`}
                  alt="User"
                />
                <LogOut
                  className={Styles.logoutButtonStyle}
                  color1="#283593"
                  color2="#2638bb"
                  color3="#939ac9"
                />
              </div>}
            </div>
            <a
              href="#"
              className={Styles.hamburger}
              onClick={this._handleSideMenuStatus}
            />
          </div>
        </div>
      </header>
    );
  }
}
