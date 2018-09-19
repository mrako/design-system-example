const ClientError = function ClientError (code, status, info) {
  this.code = code || 'USER_ERROR';
  this.status = status || 400;
  this.info = info || '';
  this.expose = true;
};

ClientError.prototype = Object.create(Error.prototype);

ClientError.middleware = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    // const { user } = ctx.state;

    let response;

    if (err instanceof ClientError) {
      response = {
        status: err.status,
        userMessage: err.code,
        errorCode: err.code,
        moreInfo: err.info,
      };
      ctx.status = err.status;

      // slack.sendError(response, user);
    } else {
      response = {
        status: err.status || 500,
        userMessage: err.message || 'Internal server error',
        errorCode: err.code || 'SERVER_ERROR',
        moreInfo: '',
      };
      ctx.status = err.status || 500;
    }

    ctx.body = response;

    ctx.app.emit('error', err, ctx);
  }
};

module.exports = ClientError;
