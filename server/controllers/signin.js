require('env2')('.env');
const { join } = require('path');
const jwt = require('jsonwebtoken');
const { compare } = require('bcryptjs');
const { signinSchema } = require('../utils/userValidation');
const { getUserPass, getUserUsername } = require('../database/quiries/getDataQuery');

const SECRET_KEY = process.env;

const signIn = (req, res, next) => {
  const userInputs = req.body;
  signinSchema.validateAsync(userInputs)
    .then((result) => getUserPass([userInputs.email]))
    .then((pass) => {
      if (pass.rows.rowCount > 0) compare(userInputs.password, pass);
    })
    .then((result) => getUserUsername([userInputs.email]))
    .then((user) => jwt.sign({ username: user }, `${SECRET_KEY}`))
    .then((token) => res.cookie('token', token, { httpOnly: true, secure: true })
      .sendFile(join(__dirname, '..', '..', 'public', 'home.html')))
    .catch((err) => next(err));
};

module.exports = signIn;
