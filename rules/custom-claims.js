function (user, context, callback) {
    context.accessToken['https://schemas.desmaximus.com/type'] = 'user';
    return callback(null, user, context);
  }