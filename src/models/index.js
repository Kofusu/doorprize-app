const { Sequelize, DataTypes } = require("sequelize")
const dbConfig = require("../configs/db.config.js")

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    dialect: "mysql",
    host: dbConfig.host,
    port: dbConfig.port
  },
)

module.exports = sequelize