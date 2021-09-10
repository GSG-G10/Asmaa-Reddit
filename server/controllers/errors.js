const { join } = require('path');

const error404 = (req, res, next) => {
  res
    .status(404)
    .sendFile(join(__dirname, '..', '..', 'public', '404.html'));
};
const serverError = (err, req, res, next) => {
  res
    .status(500)
    .sendFile(join(__dirname, '..', '..', 'public', '500.html'));
};

module.exports = { error404, serverError };
