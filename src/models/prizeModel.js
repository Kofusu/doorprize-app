const sequelize = require(".")

module.exports.getPrizeDetailJoinSession = async (sessionId) => {
  const query = "SELECT prize.id_prize, prize.nama_prize, prize.nama_gambar, sessions.id_session, sessions.nama_session FROM sessions inner join prize on sessions.id_session=prize.id_session where prize.id_session = ?"
  return await sequelize.query(query, {
    replacements: [sessionId]
  })
  .then((data) => data[0])
}

module.exports.getDetailPrize = async (prizeId) => {
  const query = "SELECT prize.id_prize, prize.nama_prize, prize.nama_gambar, prize.id_session, prize.max_winner, sessions.nama_session FROM prize INNER JOIN sessions ON prize.id_session=sessions.id_session WHERE id_prize = ?"
  return await sequelize.query(query, {
    replacements: [prizeId]
  })
  .then((data) => data[0])
}