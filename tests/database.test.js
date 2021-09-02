const dbBuild = require('../server/database/config/build');
const connection = require('../server/database/connection');
const { getPostsQuery } = require('../server/database/quiries/getDataQuery');

// eslint-disable-next-line no-undef
beforeAll(() => dbBuild());

// eslint-disable-next-line no-undef
test('check get data function', () => {
  getPostsQuery().then((data) => {
    // eslint-disable-next-line no-undef
    expect(data.rows.rowCount).toBe(2);
  });
});

// eslint-disable-next-line no-undef
afterAll(() => connection.end());
