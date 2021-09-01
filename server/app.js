require('env2')('.env');

const express = require('express');
const { join } = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static(join(__dirname, '..', 'public')));

module.exports = app;
