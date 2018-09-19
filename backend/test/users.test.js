const assert = require('assert');

const Supertest = require('supertest');

const database = require('../src/database');
const app = require('../src/app');

const server = new Supertest(app.listen());

describe('User', () => {
  let user;
  let password;

  before(async () => {
    await database.sync({ force: true });

    password = 'RopeSkipping2';

    user = await database.User.create({ email: 'test@eficode.com', password });
  });

  beforeEach(async () => {
    await server.post('/api/logout');
  });

  it('should log in with correct email and password', async () => {
    const response = await server.post('/api/login').send({ email: user.email, password });

    assert.strictEqual(response.body.email, user.email);
  });

  it('should not log in with incorrect email', async () => {
    await server.post('/api/login').send({ email: 'not.existing@eficode.com', password }).expect(401);
  });

  it('should not log in with incorrect password', async () => {
    await server.post('/api/login').send({ email: user.email, password: 'WrongPassword45' }).expect(401);
  });
});
