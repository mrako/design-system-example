const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('kcors');

const passport = require('koa-passport');

const auth = require('./auth');

/** CREATE AND CONF THE WEB SERVER **/

const app = module.exports = new Koa();

if (process.env.NODE_ENV !== 'test') {
  app.use(logger());
}

app.use(cors({ credentials: true }));
app.use(bodyParser());

app.keys = 'ExampleKeyChangeMe1234';

app.use(passport.initialize());
app.use(passport.session());

/** CONFIGURING THE API ROUTES **/

const publicRouter = new Router({ prefix: '/api' });

publicRouter.post('/login', auth.login);
publicRouter.post('/logout', auth.logout);

app.use(publicRouter.routes());
app.use(publicRouter.allowedMethods());
