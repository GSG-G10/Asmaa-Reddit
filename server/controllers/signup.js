require('env2')('.env');
const { join } = require('path');
const jwt = require('jsonwebtoken');
const { hash } = require('bcryptjs');
const { signupSchema } = require('../utils/userValidation');
const { insertUserData } = require('../database/quiries/insertDataQuery');

const SECRET_KEY = process.env;

const signUp = (req, res, next) => {
  const userInputs = req.body;
  signupSchema.validateAsync(userInputs)
    .then((result) => hash(userInputs.password, 10))
    .then((result) => insertUserData([userInputs.username, userInputs.email, result]))
    .then(jwt.sign({ username: userInputs.username }, `${SECRET_KEY}`))
    .then((token) => res.cookie('token', token, { httpOnly: true, secure: true })
      .sendFile(join(__dirname, '..', '..', 'public', 'home.html')))
    .catch((err) => next(err));
};

module.exports = signUp;
