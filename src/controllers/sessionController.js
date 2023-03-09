const { GetAllSession } = require("../models/sessionModel");
const { GetUserByStatus } = require("../models/userModel")

module.exports.getSession = async (req, res, _next) => {
  const userData = await GetAllSession();
  res.status(200).json(userData)
}

module.exports.createSession = async (req, res, _next) => {
  const { sessionName } = req.body
  const userData = await GetUserByStatus(sessionName);
  res.status(200).json(userData)
}