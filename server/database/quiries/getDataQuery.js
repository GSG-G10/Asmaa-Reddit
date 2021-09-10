const connection = require('../connection_db');

const getPostsQuery = () => connection.query('SELECT posts.id, posts.post_text, posts.post_img, posts.created_at, posts.likes, users.username, users.img_url FROM posts LEFT JOIN users ON posts.user_id = users.id ORDER BY posts.likes DESC;');

const getPostComments = (postId) => connection.query('SELECT comments.comment_text, comments.likes, users.username, users.img_url FROM comments LEFT JOIN users ON users.id = comments.user_id WHERE post_id = $1;', postId);

const getUserPosts = (username) => connection.query('SELECT posts.id, posts.post_text, posts.post_img, posts.created_at, posts.likes, users.username, users.img_url FROM posts LEFT JOIN users ON posts.user_id = users.id WHERE posts.user_id = (SELECT id FROM users where username = $1);', username);

const getUserImg = (username) => connection.query('SELECT img_url FROM users WHERE username = $1;', username);

const getUserPass = (email) => connection.query('SELECT pass FROM users WHERE username = $1;', email);

const getUserUsername = (email) => connection.query('SELECT username FROM users WHERE username = $1;', email);

module.exports = {
  getPostsQuery, getPostComments, getUserPosts, getUserImg, getUserPass, getUserUsername,
};
