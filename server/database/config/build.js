const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('../connection');

const dbBuild = () => {
  const sql = readFileSync(join(__dirname, 'build.sql')).toString();
  connection
    .query(sql)
    .then(() => console.log('Database created successfully'))
    .catch((e) => console.log('Faild to build', e.stack));
};

dbBuild();

module.exports = dbBuild;
