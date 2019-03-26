exports.dataBase = err => {
  const code = err.code == 11000 ? 409 : 500;
  return {
    data: {
      status: {
        code: code,
        message: err.errmsg
      }
    }
  };
};
