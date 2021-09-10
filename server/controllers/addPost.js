require('env2')('.env');
const jwt = require('jsonwebtoken');
const { join } = require('path');

const insertPostData = require('../database/quiries/insertDataQuery');

const SECRET_KEY = process.env;

const addPosts = (req, res, next) => {
  const post = req.body;
  console.log(post);
  const { token } = req.cookies;
  console.log(token);
  jwt.verify(token, `${SECRET_KEY}`)
    .then((result) => {
      console.log(result);
      insertPostData([post.postText, result]);
    })
    .then((result) => res.sendFile(join(__dirname, '..', '..', 'public', 'home.html')))
    .catch((err) => next(err));
};

module.exports = addPosts;
