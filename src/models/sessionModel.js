const sequelize = require(".")

module.exports.GetAllSession = async () => {
  const query = "SELECT * FROM users"
  return await sequelize.query(query).then((data) => data[0])
}

module.exports.AddSession = async (sessionName) => {
  const query = "INSERT INTO sessions (nama_session) value (?)"
  return await sequelize
    .query(query, {
      replacements: [sessionName],
    })
    .then((data) => data[0])
}
