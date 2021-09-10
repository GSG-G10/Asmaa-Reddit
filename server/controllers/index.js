const signIn = require('./signin');
const signUp = require('./signup');
const { error404, serverError } = require('./errors');

module.exports = {
  signIn, signUp, error404, serverError,
};
