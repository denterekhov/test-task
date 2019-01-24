import { object, string, mixed } from 'yup'

export const API_URL = "https://frontend-test-assignment-api.abz.agency/api/v1";

export function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

const ALLOWED_FORMATS = [
  "image/jpg",
  "image/jpeg",
];

export const schema = object().shape({
  name: string()
    .min(2, 'The name should contain at least 2 characters')
    .max(60, 'The name length should not exceed 60 characters')
    .required('Name is a required field'),
  email: string()
    .min(2, 'The e-mail should contain at least 2 characters')
    .max(100, 'The e-mail length should not exceed 100 characters')
    .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Enter valid email address')
    .required('E-mail is a required field'),
  phone: string()
    .matches(/^[\+]{0,1}380([0-9]{9})$/, 'Phone number should start with code +380 and contain 12 digits')
    .required('Phone number is a required field'),
  position_id: string()
    .required('Position is a required field'),
  photo: mixed()
    .required('Photo is a required field')
    .test(
      "fileFormat",
      "The photo should be jpg/jpeg format",
      value => value && ALLOWED_FORMATS.includes(value.type)
    )
    .test(
      "fileSize1",
      "The file size should be no more than 5000000 bytes",
      value => value && value.size < 5000000
    )
    .test(
      "fileSize2",
      "The file size should be no less than 2000 bytes",
      value => value && value.size > 2000
    )
    .test(
      "dimensions1",
      "Image width should exceed 70 px",
      (value) => {
        if (value && ALLOWED_FORMATS.includes(value.type)) {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              resolve(img.width);
            }
            img.src = window.URL.createObjectURL(value);
          })
          .then(width => value && width > 70)
          .catch(err => console.error(err.message))
        }
      }
    )
    .test(
      "dimensions2",
      "Image height should exceed 70 px",
      value => {
        if (value && ALLOWED_FORMATS.includes(value.type)) {
          return new Promise((resolve) => {
              const img = new Image();
              img.onload = () => {
                resolve(img.height);
              }
              img.src = window.URL.createObjectURL(value);
          })
          .then(height => value && height > 70)
          .catch(err => console.error(err.message))
        }
      }
    ),
})
