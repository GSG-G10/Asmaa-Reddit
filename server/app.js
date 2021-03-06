require('env2')('.env');

const express = require('express');
const { join } = require('path');

const router = require('./router');

const app = express();

app.set('port', process.env.PORT || 3300);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(join(__dirname, '..', 'public')));

app.use(router);

module.exports = app;
