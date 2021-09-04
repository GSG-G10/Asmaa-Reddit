const connection = require('../connection');

const insertUserData = (data) => {
  const dataArray = [data.username, data.email, data.pass];
  return connection.query('INTO users (username, email, pass) VALUES ($1, $2, $3);', dataArray);
};

const insertPostData = (data) => {
  const dataArray = [data.postText, data.imgURL, data.likes, data.username];
  return connection.query('INSERT INTO posts (post_text, post_img, likes, user_id) VALUES ($1, $2, $3, (SELECT id FROM users WHERE username = $4));', dataArray);
};

const insertCommentData = (data) => {
  const dataArray = [data.commentText, data.likes, data.username, data.postId];
  return connection.query('INSERT INTO posts (post_text, likes, user_id) VALUES ($1, $2, (SELECT id FROM users WHERE username = $3), $4);', dataArray);
};

module.exports = { insertUserData, insertPostData, insertCommentData };
