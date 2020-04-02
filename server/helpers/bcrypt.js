const bcrypt = require('bcryptjs');

function hashPassword(string) {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(string, salt);
  return hash
}

function checkPassword(input, db) {
  return bcrypt.compareSync(input, db);
}

module.exports = { hashPassword, checkPassword }