const passport = require('koa-passport');

const database = require('./database');

const ClientError = require('./client-error');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  database.User.findOne({ where: { id } }).then(
    (user) => {
      done(null, user);
    },
    (err) => {
      done(err);
    }
  );
});

exports.login = async (ctx) => {
  const { body } = ctx.request;

  const user = await database.User.findOne({ where: { email: body.email.toLowerCase() } });

  if (!user) {
    throw new ClientError('INCORRECT_EMAIL', 401);
  }

  const match = user.passwordMatch(body.password);
  if (!match) {
    throw new ClientError('INCORRECT_PASSWORD', 401);
  }

  await ctx.login(user);

  ctx.body = user.toJSON();
  ctx.status = 200;
};

exports.logout = (ctx) => {
  ctx.logout();
  ctx.status = 204;
};
