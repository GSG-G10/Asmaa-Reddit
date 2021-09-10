require('env2')('.env');

const { Pool } = require('pg');

const {
  DATABASE_URL, DB_URL, TEST_DB_URL, NODE_ENV,
} = process.env;

let dburl = '';

switch (NODE_ENV) {
  case 'production':
    dburl = DATABASE_URL;
    break;
  case 'development':
    dburl = DB_URL;
    break;
  case 'test':
    dburl = TEST_DB_URL;
    break;
  default:
    throw new Error('No Database is founded !');
}

const options = {
  connectionString: dburl,
  ssl: {
    rejectUnauthorized: false,
  },
};

module.exports = new Pool(options);
