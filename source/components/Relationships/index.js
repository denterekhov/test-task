// Core
import React, { Component } from "react";

// Instruments
import Styles from "./styles.m.css";

export default class Relationships extends Component {
  render() {
    return (
      <section id="relationships" className={Styles.relationships}>
        <div className="container">
          <h2>About my relationships with web-development</h2>
          <div className={Styles.flex_container}>
            <div className={Styles.skillContainer}>
              <div className={Styles.htmlPic} />
              <div className={Styles.skillInfo}>
                <h3>I'm in love with HTML</h3>
                <p>
                  Hypertext Markup Language (HTML) is the standard markup
                  language for creating web pages and web applications.
                </p>
              </div>
            </div>
            <div className={Styles.skillContainer}>
              <div className={Styles.cssPic} />
              <div className={Styles.skillInfo}>
                <h3>CSS is my best friend</h3>
                <p>
                  Cascading Style Sheets (CSS) is a style sheet language used
                  for describing the presentation of a document written in a
                  markup language like HTML.
                </p>
              </div>
            </div>
            <div className={Styles.skillContainer}>
              <div className={Styles.jsPic} />
              <div className={Styles.skillInfo}>
                <h3>JavaScript is my passion</h3>
                <p>
                  JavaScript is a high-level, interpreted programming language.
                  It is a language which is also characterized as dynamic,
                  weakly typed, prototype-based and multi-paradigm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
