const { GetUserByStatus, GetAllUser } = require("../models/userModel")

module.exports.getUser = async (req, res, _next) => {
  const userData = await GetAllUser();
  res.status(200).json(userData)
}

module.exports.getUserActive = async (req, res, _next) => {
  const userData = await GetUserByStatus("active");
  res.status(200).json(userData)
}

module.exports.getUserBlacklist = async (req, res, _next) => {
  const userData = await GetUserByStatus("blacklist");
  res.status(200).json(userData)
}