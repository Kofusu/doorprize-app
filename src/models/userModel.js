const sequelize = require(".")

module.exports.getAllUser = async () => {
  const query = "SELECT * FROM users"
  return await sequelize.query(query).then((data) => data[0])
}

module.exports.addUser = async ({nama_user, nama_pt, no_hp, domisili, status}) => {
  const query = "INSERT INTO users(nama_user, no_hp, domisili, nama_pt, status) VALUE (?, ?, ?, ?, ?)"
  return await sequelize.query(query, {
    replacements: [nama_user, no_hp, domisili, nama_pt, status]
  }).then((data) => data[0])
}

module.exports.deleteAllUser = async () => {
  const query = "DELETE FROM users WHERE id_user >= 1"
  return await sequelize.query(query).then((data) => data[0])
}

module.exports.getUserByStatus = async (status, offset = 0, limit = 10) => {
  const query = "SELECT * FROM users where status = ? LIMIT ? offset ?"
  return await sequelize
    .query(query, {
      replacements: [status, limit, offset < 0 ? 0 : offset],
    })
    .then((data) => data[0])
}

module.exports.getUserByStatusCount = async (status) => {
  const query = "SELECT count(*) as count FROM users where status = ?"
  return await sequelize
    .query(query, {
      replacements: [status],
    })
    .then((data) => data[0][0].count)
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

module.exports.updateAllUserStatus = async (status) => {
  const oppositeStatus = status === "active" ? "blacklist" : "active"
  const query = "UPDATE users SET status = ? WHERE id_user >= 1"
  return await sequelize
    .query(query, {
      replacements: [oppositeStatus],
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