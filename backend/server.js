const app = require('./src/app');

const db = require('./src/database');

const port = process.env.PORT || 9000;

db.sync().then(() => {
  app.listen(port);
});

console.log('App listening on port ' + port);
