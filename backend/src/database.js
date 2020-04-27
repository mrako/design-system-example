const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');

/** INIT DATABASE **/

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://example:example@localhost/example';

const sequelize = new Sequelize(DATABASE_URL, {
  logging: false,
});

/** INIT TABLES **/

const User = sequelize.define('users', {
  email: { type: Sequelize.STRING, unique: true },
  password: {
    type: Sequelize.STRING,
    set (str) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(str, salt);

      this.setDataValue('password', hash);
    },
  },
});

User.prototype.passwordMatch = function passwordMatch (password) {
  return bcrypt.compareSync(password, this.password);
};

User.prototype.toJSON = function toJSON () {
  return { id: this.id, email: this.email };
};

/** EXPORT OBJECTS **/

exports.sync = options => sequelize.sync(options);

exports.User = User;
