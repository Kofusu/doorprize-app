const sequelize = require(".")

module.exports.getAllUser = async () => {
  const query = "SELECT * FROM users"
  return await sequelize.query(query).then((data) => data[0])
}

module.exports.getUserByStatus = async (status) => {
  const query = "SELECT * FROM users where status = ?"
  return await sequelize
    .query(query, {
      replacements: [status],
    })
    .then((data) => data[0])
}

module.exports.updateUserStatus = async (status, userId) => {
  const oppositeStatus = status === "active" ? "blacklist" : "active"
  const query = "UPDATE users SET status = ? WHERE id_user = ?"
  return await sequelize
    .query(query, {
      replacements: [oppositeStatus, userId],
    })
    .then((data) => data[0])
}

module.exports.getCountUser = async () => {
  const query = "SELECT COUNT(id_user) as count from users where status='active'"
  return await sequelize.query(query).then((data) => data[0][0].count)
}

module.exports.getCountBlacklist = async () => {
  const query = "SELECT COUNT(id_user) as count from users where status='blacklist'"
  return await sequelize.query(query).then((data) => data[0][0].count)
}

module.exports.getCountprize = async () => {
  const query = "SELECT COUNT(id_prize) as count from prize"
  return await sequelize.query(query).then((data) => data[0][0].count)
}