// const Joi = require("joi");

// const validateRegister = (schema) => (payload) => {
//   return schema.validate(payload, { abortEarly: false });
// };

// const registerSchema = Joi.object({
// // FirstName: Joi.string().max(30).required(),
// //   lastName: Joi.string().max(30).required(),
//   email: Joi.string().email().required(),
//   password: Joi.string().required(),
// });

// const validateLogin = Joi.object({
//   email: Joi.string().required(),
//   password: Joi.string().required(),
// });

// exports.validateRegister = validateRegister(registerSchema);
// exports.validateLogin = validateRegister(validateLogin);
