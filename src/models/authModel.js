const sequelize = require(".")

module.exports.getUsername = async (username) => {
  const query = "SELECT * FROM auth WHERE username = ?"
  return await sequelize
    .query(query, {
      replacements: [username],
    })
    .then((data) => data[0])
}
