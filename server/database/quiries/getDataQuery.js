const connection = require('../connection');

const getPostsQuery = () => connection.query('SELECT * FROM posts');

module.exports = { getPostsQuery };
