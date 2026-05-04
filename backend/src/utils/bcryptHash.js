const bcrypt = require("bcryptjs");
async function bcryptHash(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(this.password, salt);
}

module.exports = bcryptHash;
