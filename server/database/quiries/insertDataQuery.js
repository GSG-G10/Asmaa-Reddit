const connection = require('../connection_db');

const insertUserData = (data) => connection.query('INSERT INTO users (username, email, pass) VALUES ($1, $2, $3);', data);

const insertPostData = (data) => connection.query('INSERT INTO posts (post_text, user_id) VALUES ($1, (SELECT id FROM users WHERE username = $2));', data);

const insertCommentData = (data) => {
  const dataArray = [data.commentText, data.username, data.postId];
  return connection.query('INSERT INTO posts (post_text, likes, user_id) VALUES ($1, (SELECT id FROM users WHERE username = $2), $3);', dataArray);
};

module.exports = { insertUserData, insertPostData, insertCommentData };
