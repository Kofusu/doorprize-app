const sequelize = require(".")

module.exports.getAllWinner = async () => {
  const query = "SELECT * FROM winner"
  return await sequelize.query(query).then((data) => data[0])
}

module.exports.getWinnerPrize = async (prizeId) => {
  const query = "SELECT users.id_user, users.nama_user, users.no_hp, users.domisili, users.status, prize.id_prize FROM winner INNER JOIN users ON  users.id_user=winner.id_user INNER JOIN prize ON prize.id_prize=winner.id_prize WHERE winner.id_prize = ?"
  return await sequelize.query(query, {
    replacements: [prizeId]
  }).then((data) => data[0])
}

module.exports.deleteAllWinner = async () => {
  const query = "DELETE FROM winner WHERE id_winner >= 1"
  return await sequelize.query(query).then((data) => data[0])
}