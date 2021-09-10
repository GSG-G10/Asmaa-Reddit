const Joi = require('joi');

const emailRegExp = '(?=^.{0,320}$)(^[a-zA-Z0-9]{1,64}@[a-zA-Z0-9]{1,255}(\.{1}[a-zA-Z]+)*$)';
const passRegExp = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';

const signupSchema = Joi.object({
  username: Joi.string().alphanum().required(),
  email: Joi.string().pattern(new RegExp(emailRegExp)).required(),
  password: Joi.string().pattern(new RegExp(passRegExp)).required(),
});

const signinSchema = Joi.object({
  email: Joi.string().pattern(new RegExp(emailRegExp)).required(),
  password: Joi.string().pattern(new RegExp(passRegExp)).required(),
});

module.exports = { signupSchema, signinSchema };
