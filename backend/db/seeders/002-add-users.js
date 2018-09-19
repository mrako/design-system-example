const bcrypt = require('bcrypt-nodejs');

const salt = bcrypt.genSaltSync(10);
const passwordHash = bcrypt.hashSync('GoneFishing1', salt);

module.exports = {
  up: async (queryInterface) => {
    const createdAt = new Date();

    await queryInterface.bulkInsert('users', [{
      email: 'test.user@eficode.com',
      password: passwordHash,
      updatedAt: createdAt,
      createdAt,
    }]);
  },

  down: queryInterface => queryInterface.bulkDelete('users', { email: 'test.user@eficode.com' }, {}),
};
