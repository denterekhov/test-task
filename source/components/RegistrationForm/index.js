// Core
import React, { Component } from "react";
import PropTypes from "prop-types";

// Instruments
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import cx from "classnames";
import { schema, API_URL as URL } from "./../../instruments/helpers";
import Styles from "./styles.m.css";

//Components
import UserPosition from "./UserPosition";
import FileUploadInput from "./FileUploadInput";

export default class RegistrationForm extends Component {
  static propTypes = {
    _handleOpenModalAndFetch: PropTypes.func.isRequired,
  }

  state = {
    token: "",
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
      console.error(err.message);
    }
  };

  _handleSubmit = async({name, email, phone, position_id, photo}, {setSubmitting, setValues, setTouched}) => {
    const { token } = this.state;
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
        url,
        headers: {
          token,
          "Content-Type": "multipart/form-data"
        },
        data: formData
      });

      if (response.status === 201) {
        this.props._handleOpenModalAndFetch();
        setValues({
          name: '',
          email: '',
          phone: '',
          position_id: '',
          positionName: '',
          photo: '',
        });
        setTouched({}) 
        setSubmitting(false);
      }
    } catch (err) {
      setSubmitting(false);
      console.error(err.message);
    }
  };

  render() {
    return (
      <section id="signup" className={Styles.registrationForm}>
        <div className="container">
          <h2>Register to get a work</h2>
          <h4>
            Attention! After successful registration and alert, update the list
            of users in the block from the top
          </h4>

          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              position_id: '',
              positionName: '',
              photo: '',
            }}
            validationSchema={schema}
            onSubmit={this._handleSubmit} 
          >
            {({ values, errors, touched, handleChange }) => {
              const inputFileStyle = cx(Styles.inputFileWrapper, {
                [Styles.positionAndFileError]: errors.photo && touched.photo
              });

              const positionStyle = cx(Styles.userPositionWrapper, {
                [Styles.positionAndFileError]: errors.position_id && touched.position_id
              });

              const isFormFilled = !(Object.keys(touched).length === 6) || Object.keys(errors).length;

              return (
                <Form>
                  <div className={Styles.formContainer}>
                    <div className={Styles.inputTextWrapper}>
                      <Field
                        className={errors.name && touched.name && Styles.inputTextError}
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={values.name}
                        onChange={handleChange}
                      />
                      <label htmlFor="name">Name</label>
                      <ErrorMessage name="name" className={Styles.errorText} component="div" /> 
                    </div>

                    <div className={Styles.inputTextWrapper}>
                      <Field
                        className={errors.email && touched.email && Styles.inputTextError}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={values.email}
                        onChange={handleChange}
                      />
                      <label htmlFor="email">Email</label>
                      <ErrorMessage name="email" className={Styles.errorText} component="div" /> 
                    </div>

                    <div className={Styles.inputTextWrapper}>
                      <Field
                        className={errors.phone && touched.phone && Styles.inputTextError}
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+38 (___) ___ __ __"
                        value={values.phone}
                        onChange={handleChange}
                      />
                      <label htmlFor="phone">Phone</label>
                      <ErrorMessage name="phone" className={Styles.errorText} component="div" /> 
                    </div>

                    <div className={positionStyle}>
                      <Field
                        name="position_id"
                        component={UserPosition}
                      />
                      <ErrorMessage name="position_id" className={Styles.errorText} component="div" /> 
                    </div>

                    <div className={inputFileStyle}>
                      <Field
                        name="photo"
                        component={FileUploadInput}
                      />
                      <span className={Styles.fileName}>
                        {values.photo ? values.photo.name : "Upload your photo"}
                      </span>
                      <label htmlFor="photo" className={Styles.fileUpload}>
                        Upload
                      </label>
                      {errors.photo && touched.photo 
                        ? <ErrorMessage name="photo" className={Styles.errorText} component="div" />
                        : (
                            <span className={Styles.fileUploadAssistiveText}>
                              File format jpg up to 5 MB, the minimum size of 70x70px
                            </span>
                          )
                      }
                    </div>
                  </div>
                  <input disabled={isFormFilled} type="submit" value="Sign Up" />
                </Form>
              )
            }}
          </Formik>
        </div>
      </section>
    );
  }
}
