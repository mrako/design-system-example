const db = require('../../src/database');

module.exports = {
  up: async () => db.sync({ force: true }),

  down: () => {},
};
