const signIn = require('./signin');
const signUp = require('./signup');
const addPosts = require('./addPost');
const { error404, serverError } = require('./errors');

module.exports = {
  signIn, signUp, addPosts, error404, serverError,
};
