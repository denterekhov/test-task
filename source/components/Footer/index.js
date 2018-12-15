// Core
import React, { Component } from "react";

// Instruments
import Styles from "./styles.m.css";

//Components
import Logo from "../../components/Icons/Logo";
import FacebookLogo from "../../components/Icons/FacebookLogo";
import LinkedinLogo from "../../components/Icons/LinkedinLogo";
import InstagramLogo from "../../components/Icons/InstagramLogo";
import TwitterLogo from "../../components/Icons/TwitterLogo";
import PinterestLogo from "../../components/Icons/PinterestLogo";

export default class Footer extends Component {
  render() {
    return (
      <footer className={Styles.footer}>
        <div className={Styles.footer_container}>
          <Logo className={Styles.logo} color1="#fff" />
          <nav className={Styles.horizontal_menu}>
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
            </ul>
          </nav>
        </div>
        <hr />
        <div className={Styles.footer_container}>
          <ul className={Styles.contacts}>
            <li>
              <a href="mailto:work.of.future@gmail.com">
                work.of.future@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+380507892498">+38 (050) 789 24 98</a>
            </li>
            <li>
              <a href="tel:+380955560845">+38 (095) 556 08 45</a>
            </li>
          </ul>
          <nav className={Styles.menu}>
            <ul>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Design</a>
              </li>
              <li>
                <a href="#">Code</a>
              </li>
              <li>
                <a href="#">Collaborate</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Tutorials</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Guides</a>
              </li>
              <li>
                <a href="#">Examples</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Conditions</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={Styles.footer_container}>
          <div className={Styles.socials_container}>
            <p>&copy; abz.agency spacially for the test task</p>
            <div className={Styles.socials}>
              <FacebookLogo
                color1="#fff"
                color2="#ef6c00"
                color3="#939ac9"
                disabled
              />
              <LinkedinLogo color1="#fff" color2="#ef6c00" color3="#939ac9" />
              <InstagramLogo color1="#fff" color2="#ef6c00" color3="#939ac9" />
              <TwitterLogo color1="#fff" color2="#ef6c00" color3="#939ac9" />
              <PinterestLogo
                color1="#fff"
                color2="#ef6c00"
                color3="#939ac9"
                disabled
              />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
