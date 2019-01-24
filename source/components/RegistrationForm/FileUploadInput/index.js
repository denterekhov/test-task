// Core
import React, { Component } from "react";

// Instruments
import Styles from "./styles.m.css";

export default class FileUploadInput extends Component {

  _handleImageChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = () => {
        this.props.form.setFieldValue('photo', file);
      }
      reader.readAsDataURL(file);
    }
  }

  _handleFieldTouch = () => {
    this.props.form.setFieldTouched('photo');
  }

  render() {
    return (
      <div className={Styles.fileUploadInput}>
        <input
          id="photo"
          type="file"
          onChange={this._handleImageChange}
          onBlur={this._handleFieldTouch}
          accept=".jpg,.jpeg"
        />
      </div>
    );
  }
}