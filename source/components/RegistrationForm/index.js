// Core
import React, { Component } from 'react';
import { func } from 'prop-types';

// Instruments
import { Formik, Form, Field, ErrorMessage } from 'formik';
import cx from 'classnames';
import { schema, API_URL as URL } from './../../instruments/helpers';
import Styles from './styles.m.css';

//Components
import UserPosition from './UserPosition';
import FileUploadInput from './FileUploadInput';

export default class RegistrationForm extends Component {
  static propTypes = {
    _handleOpenModalAndFetch: func.isRequired,
    _setIsFetching:           func.isRequired,
  };

  state = {
    token: '',
  };

  componentDidMount () {
    this._fetchToken();
  }

  _fetchToken = async () => {
    const url = `${URL}/token`;

    try {
      const response = await fetch(url);

      if (response.status === 200) {
        const { token } = await response.json();

        this.setState({
          token,
        });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  _handleSubmit = async (
    { name, email, phone, positionId, photo },
    { setSubmitting, setValues, setTouched, setErrors }
  ) => {
    const { token } = this.state;
    const { _setIsFetching } = this.props;
    const url = `${URL}/users`;

    _setIsFetching(true);
    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('position_id', positionId);
    formData.append('photo', photo);

    try {
      const response = await fetch(url, {
        method:  'POST',
        headers: {
          token,
        },
        body: formData,
      });

      if (response.status === 201) {
        this.props._handleOpenModalAndFetch();
        setValues({
          name:         '',
          email:        '',
          phone:        '',
          positionId:   '',
          positionName: '',
          photo:        '',
        });
        setTouched({});
      }

      if (response.status === 409) {
        setErrors({
          email: 'User with this phone or email already exist',
          phone: 'User with this phone or email already exist',
        });
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      setSubmitting(false);
      _setIsFetching(false);
    }
  };

  render () {
    return (
      <section className = { Styles.registrationForm } id = 'signup'>
        <div className = 'container'>
          <h2>Register to get a work</h2>
          <h4>
            Attention! After successful registration and alert, update the list
            of users in the block from the top
          </h4>

          <Formik
            initialValues = { {
              name:         '',
              email:        '',
              phone:        '',
              positionId:   '',
              positionName: '',
              photo:        '',
            } }
            validationSchema = { schema }
            onSubmit = { this._handleSubmit }>
            {({ values, errors, touched, handleChange }) => {
              const inputFileStyle = cx(Styles.inputFileWrapper, {
                [Styles.positionAndFileError]: errors.photo && touched.photo,
              });

              const positionStyle = cx(Styles.userPositionWrapper, {
                [Styles.positionAndFileError]:
                  errors.positionId && touched.positionId,
              });

              const isFormFilled =
                !(Object.keys(touched).length === 6) ||
                Object.keys(errors).length;

              return (
                <Form>
                  <div className = { Styles.formContainer }>
                    <div className = { Styles.inputTextWrapper }>
                      <Field
                        className = {
                          errors.name && touched.name && Styles.inputTextError
                        }
                        id = 'name'
                        name = 'name'
                        placeholder = 'Your name'
                        type = 'text'
                        value = { values.name }
                        onChange = { handleChange }
                      />
                      <label htmlFor = 'name'>Name</label>
                      <ErrorMessage
                        className = { Styles.errorText }
                        component = 'div'
                        name = 'name'
                      />
                    </div>

                    <div className = { Styles.inputTextWrapper }>
                      <Field
                        className = {
                          errors.email && touched.email && Styles.inputTextError
                        }
                        id = 'email'
                        name = 'email'
                        placeholder = 'Your email'
                        type = 'email'
                        value = { values.email }
                        onChange = { handleChange }
                      />
                      <label htmlFor = 'email'>Email</label>
                      <ErrorMessage
                        className = { Styles.errorText }
                        component = 'div'
                        name = 'email'
                      />
                    </div>

                    <div className = { Styles.inputTextWrapper }>
                      <Field
                        className = {
                          errors.phone && touched.phone && Styles.inputTextError
                        }
                        id = 'phone'
                        name = 'phone'
                        placeholder = '+38 (___) ___ __ __'
                        type = 'tel'
                        value = { values.phone }
                        onChange = { handleChange }
                      />
                      <label htmlFor = 'phone'>Phone</label>
                      <ErrorMessage
                        className = { Styles.errorText }
                        component = 'div'
                        name = 'phone'
                      />
                    </div>

                    <div className = { positionStyle }>
                      <Field component = { UserPosition } name = 'positionId' />
                      <ErrorMessage
                        className = { Styles.errorText }
                        component = 'div'
                        name = 'positionId'
                      />
                    </div>

                    <div className = { inputFileStyle }>
                      <Field component = { FileUploadInput } name = 'photo' />
                      <span className = { Styles.fileName }>
                        {values.photo ? values.photo.name : 'Upload your photo'}
                      </span>
                      <label className = { Styles.fileUpload } htmlFor = 'photo'>
                        Upload
                      </label>
                      {errors.photo && touched.photo ? (
                        <ErrorMessage
                          className = { Styles.errorText }
                          component = 'div'
                          name = 'photo'
                        />
                      ) : (
                        <span className = { Styles.fileUploadAssistiveText }>
                          File format jpg up to 5 MB, the minimum size of
                          70x70px
                        </span>
                      )}
                    </div>
                  </div>
                  <input
                    disabled = { isFormFilled }
                    type = 'submit'
                    value = 'Sign Up'
                  />
                </Form>
              );
            }}
          </Formik>
        </div>
      </section>
    );
  }
}
