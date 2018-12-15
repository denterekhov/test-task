// Core
import React, { Component } from "react";

// Instruments
import Styles from "./styles.m.css";

export default class Requirements extends Component {
  render() {
    return (
      <section id="requirements" className={Styles.requirements}>
        <div className="container">
          <h2>General requirements for the test task</h2>
          <div className={Styles.flex_container}>
            <div>
              <p>
                Users want to find answers to their questions quickly and data
                shows that people really care about how quickly their pages
                load. The Search team announced speed would be a ranking signal
                for desktop searches in 2010 and as of this month (July 2018),
                page speed will be a ranking factor for mobile searches too.
              </p>
              <p>
                If you're a developer working on a site, now is a good time to
                evaluate your performance using our speed tools. Think about how
                performance affects the user experience of your pages and
                consider measuring a variety of real-world user-centric
                performance metrics.
              </p>
              <p>
                Are you shipping too much JavaScript? Too many images? Images
                and JavaScript are the most significant contributors to the page
                weight that affect page load time based on data from HTTP
                Archive and the Chrome User Experience Report - our public
                dataset for key UX metrics as experienced by Chrome users under
                real-world conditions.
              </p>
            </div>
            <div className={Styles.manLaptop} />
          </div>
        </div>
      </section>
    );
  }
}
