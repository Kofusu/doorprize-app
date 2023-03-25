const sequelize = require(".")

module.exports.getAllWinner = async () => {
  const query = "SELECT users.id_user, users.nama_user, users.no_hp, users.nama_pt, users.domisili, users.status, prize.nama_prize, prize.nama_gambar FROM winner INNER JOIN users ON  users.id_user=winner.id_user INNER JOIN prize ON prize.id_prize=winner.id_prize"
  return await sequelize.query(query).then((data) => data[0])
}

module.exports.getWinnerPrize = async (prizeId) => {
  const query =
    "SELECT users.id_user, users.nama_pt, users.nama_user, users.no_hp, users.domisili, users.status, prize.id_prize, prize.nama_prize FROM winner INNER JOIN users ON  users.id_user=winner.id_user INNER JOIN prize ON prize.id_prize=winner.id_prize WHERE winner.id_prize = ?"
  return await sequelize
    .query(query, {
      replacements: [prizeId],
    })
    .then((data) => data[0])
}

module.exports.addWinner = async (id_user, id_prize) => {
  const query = "INSERT INTO winner(id_user, id_prize) value(?, ?)"
  return await sequelize
    .query(query, {
      replacements: [id_user, id_prize],
    })
    .then((data) => data[0])
}

module.exports.deleteAllWinner = async () => {
  const query = "DELETE FROM winner WHERE id_winner >= 1"
  return await sequelize.query(query).then((data) => data[0])
}
