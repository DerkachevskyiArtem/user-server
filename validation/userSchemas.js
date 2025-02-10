const yup = require('yup');

const USER_FIRSTMANE_SCHEMA = yup.string();
const USER_LASTNAME_SCHEMA = yup.string();
const USER_IMGSRC_SCHEMA = yup.string();
const USER_ISMALE_SCHEMA = yup.boolean();
const USER_EMAIL_SCHEMA = yup
  .string()
  .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/, 'Invalid email format');
const USER_PASSWORD_SCHEMA = yup
  .string()
  .matches(
    /^[a-zA-Z0-9!@#$%^&*()_+-=]{6,}$/,
    'Password must be at least 6 characters and contain only letters, numbers, or special characters (!@#$%^&*()_+-=)'
  );

module.exports.CREATE_USER_SCHEMA = yup.object({
  firstName: USER_FIRSTMANE_SCHEMA.required(),
  lastName: USER_LASTNAME_SCHEMA.required(),
  imgSrc: USER_IMGSRC_SCHEMA,
  isMale: USER_ISMALE_SCHEMA.required(),
  email: USER_EMAIL_SCHEMA.required(),
  password: USER_PASSWORD_SCHEMA.required(),
});

module.exports.UPDATE_USER_SCHEMA = yup.object({
  firstName: USER_FIRSTMANE_SCHEMA,
  lastName: USER_LASTNAME_SCHEMA,
  imgSrc: USER_IMGSRC_SCHEMA,
  isMale: USER_ISMALE_SCHEMA,
  email: USER_EMAIL_SCHEMA,
  password: USER_PASSWORD_SCHEMA,
});
