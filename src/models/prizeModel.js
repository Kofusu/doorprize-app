const sequelize = require(".")

module.exports.getAllPrizeBySession = async () => {
  const query =
    "SELECT prize.id_prize, prize.nama_prize, prize.nama_gambar, sessions.id_session, sessions.nama_session, max_winner FROM sessions inner join prize on sessions.id_session=prize.id_session"
  return await sequelize.query(query).then((data) => data[0])
}

module.exports.removePrizeById = async (id) => {
  const query = "DELETE FROM prize WHERE id_prize = ?"
  return await sequelize
    .query(query, {
      replacements: [id],
    })
    .then((data) => data[0])
}

module.exports.getPrizeDetailJoinSession = async (sessionId) => {
  const query =
    "SELECT prize.id_prize, prize.nama_prize, prize.nama_gambar, sessions.id_session, sessions.nama_session FROM sessions inner join prize on sessions.id_session=prize.id_session WHERE prize.id_session = ?"
  return await sequelize
    .query(query, {
      replacements: [sessionId],
    })
    .then((data) => data[0])
}

module.exports.getDetailPrize = async (prizeId) => {
  const query =
    "SELECT prize.id_prize, prize.nama_prize, prize.nama_gambar, prize.id_session, prize.max_winner, sessions.nama_session FROM prize INNER JOIN sessions ON prize.id_session=sessions.id_session WHERE id_prize = ?"
  return await sequelize
    .query(query, {
      replacements: [prizeId],
    })
    .then((data) => data[0])
}

module.exports.addPrize = async (caption, fName, sessionId, unit) => {
  const query =
    "INSERT INTO prize(nama_prize, nama_gambar, id_session, max_winner) value(?, ?, ?, ?)"
  return await sequelize
    .query(query, {
      replacements: [caption, fName, sessionId, unit],
    })
    .then((data) => data[0])
}

module.exports.generateWinner = async (limit = 0) => {
  const query =
    "SELECT * FROM users WHERE status = 'active' ORDER BY RAND() LIMIT ?"
  return await sequelize
    .query(query, {
      replacements: [limit],
    })
    .then((data) => data[0])
}
