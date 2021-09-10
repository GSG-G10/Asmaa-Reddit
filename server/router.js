const express = require('express');
const cookieParser = require('cookie-parser');

const router = express.Router();
const { getPostsQuery } = require('./database/quiries/getDataQuery');
const controllers = require('./controllers');

router.use(cookieParser());

router.get('/homeposts', (req, res, next) => {
  getPostsQuery()
    .then((result) => res.json(result.rows))
    .catch((err) => next(err));
});

router.post('/signup', controllers.signUp);
router.post('/signin', controllers.signIn);
router.post('/addPost', controllers.addPosts);

router.use(controllers.error404);
router.use(controllers.serverError);

module.exports = router;
