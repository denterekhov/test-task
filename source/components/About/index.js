// Core
import React, { Component } from "react";

// Instruments
import Styles from "./styles.m.css";

export default class About extends Component {
  render() {
    return (
      <section id="about" className={Styles.about}>
        <div className="container">
          <h2>Let's get acquainted</h2>
          <div className={Styles.flex_container}>
            <div className={Styles.manMobile} />
            <div className={Styles.mySkills}>
              <h3>I am cool frontend developer</h3>
              <p>
                When real users have a slow experience on mobile, they're much
                less likely to find what they are looking for or purchase from
                you in the future. For many sites this equates to a huge missed
                opportunity, especially when more than half of visits are
                abandoned if a mobile page takes over 3 seconds to load.
              </p>
              <p>
                Last week, Google Search and Ads teams announced two new speed
                initiatives to help improve user-experience on the web. 
              </p>
              <a href="#signup">Sign Up</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
