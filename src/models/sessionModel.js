const sequelize = require(".")

module.exports.GetAllSession = async () => {
  const query = "SELECT * FROM sessions"
  return await sequelize.query(query).then((data) => data[0])
}

module.exports.getSessionDetail = async (sessionId) => {
  const query = "SELECT * from sessions where id_session = ?"
  return await sequelize
    .query(query, {
      replacements: [sessionId],
    })
    .then((data) => data[0])
}

module.exports.AddSession = async (sessionName) => {
  const query = "INSERT INTO sessions (nama_session) value (?)"
  return await sequelize
    .query(query, {
      replacements: [sessionName],
    })
    .then((data) => data[0])
}

module.exports.removeSession = async (sessionId) => {
  const query2 = "DELETE FROM prize WHERE id_session = ?"
  await sequelize.query(query2, { replacements: [sessionId] })

  const query = "DELETE FROM sessions WHERE id_session = ?"
  return await sequelize
    .query(query, {
      replacements: [sessionId],
    })
    .then((data) => data[0])
}

module.exports.removeAllSession = async () => {
  const query2 = "DELETE FROM prize WHERE id_prize >= 1"
  await sequelize.query(query2)

  const query = "DELETE FROM sessions WHERE id_session >= 1"
  return await sequelize.query(query).then((data) => data[0])
}
