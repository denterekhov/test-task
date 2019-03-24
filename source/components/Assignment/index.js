// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

export default class Assignment extends Component {
  render () {
    return (
      <section className = { Styles.assignment }>
        <div className = 'container'>
          <h1>Test assignment for Frontend Developer position</h1>
          <span className = { Styles.visibleText }>
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository. &nbsp;
            <span className = { Styles.invisibleText }>
              Please be patient, we consider and respond to every application
              that meets minimum requirements. We look forward to your
              submission. Good luck!
            </span>
          </span>
          <a href = '#signup'>Sign Up</a>
        </div>
      </section>
    );
  }
}
