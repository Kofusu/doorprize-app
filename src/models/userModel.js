const sequelize = require(".")

module.exports.GetAllUser = async () => {
  const query = "SELECT * FROM users"
  return await sequelize.query(query).then((data) => data[0])
}

module.exports.GetUserByStatus = async (status) => {
  const query = "SELECT * FROM users where status = ?"
  return await sequelize
    .query(query, {
      replacements: [status],
    })
    .then((data) => data[0])
}
