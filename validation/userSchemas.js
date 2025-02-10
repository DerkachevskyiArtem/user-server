const yup = require('yup');

module.exports.CREATE_USER_SCHEMA = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  isMale: yup.boolean().required(),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
      'Invalid email format'
    )
    .required(),
  password: yup
    .string()
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+-=]{6,}$/,
      'Password must be at least 6 characters and contain only letters, numbers, or special characters (!@#$%^&*()_+-=)'
    )
    .required(),
});

module.exports.UPDATE_USER_SCHEMA = yup.object({
  firstName: yup.string(),
  lastName: yup.string(),
  isMale: yup.boolean(),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
      'Invalid email format'
    ),
  password: yup
    .string()
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+-=]{6,}$/,
      'Password must be at least 6 characters and contain only letters, numbers, or special characters (!@#$%^&*()_+-=)'
    ),
});
