// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

export default class FileUploadInput extends Component {
  _handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.props.form.setFieldValue('photo', file);
      };
      reader.readAsDataURL(file);
    }
  };

  _handleFieldTouch = () => {
    this.props.form.setFieldTouched('photo');
  };

  render () {
    return (
      <div className = { Styles.fileUploadInput }>
        <input
          accept = '.jpg,.jpeg'
          id = 'photo'
          type = 'file'
          onBlur = { this._handleFieldTouch }
          onChange = { this._handleImageChange }
        />
      </div>
    );
  }
}
