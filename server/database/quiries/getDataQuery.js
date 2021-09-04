const connection = require('../connection');

const getPostsQuery = () => connection.query('SELECT posts.id, posts.post_text, posts.post_img, posts.created_at, posts.likes, users.username, users.img_url FROM posts LEFT JOIN users ON posts.user_id = users.id ORDER BY posts.likes DESC;');

const getPostComments = (postId) => connection.query('SELECT comments.comment_text, comments.likes, users.username, users.img_url FROM comments LEFT JOIN users ON users.id = comments.user_id WHERE post_id = $1;', postId);

const getUserPosts = (username) => connection.query('SELECT posts.id, posts.post_text, posts.post_img, posts.created_at, posts.likes, users.username, users.img_url FROM posts LEFT JOIN users ON posts.user_id = users.id WHERE posts.user_id = (SELECT id FROM users where username = $1);', username);

const getUserInfo = (username) => connection.query('SELECT img_url FROM users WHERE username = $1;', username);

module.exports = {
  getPostsQuery, getPostComments, getUserPosts, getUserInfo,
};
