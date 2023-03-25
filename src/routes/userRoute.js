const bodyParser = require("body-parser")
const {
  getAllUser,
  getUserByStatus,
  getCountUser,
  getCountBlacklist,
  getCountprize,
  updateUserStatus,
  getUserByStatusCount,
  addUser,
  deleteAllUser,
  updateAllUserStatus,
} = require("../models/userModel")
const { getAllWinner, deleteAllWinner } = require("../models/winnerModel")

const router = require("express").Router()

router.use(bodyParser.urlencoded({ extended: false }))

router.get("/", async (req, res, _next) => {
  const userData = await getAllUser()
  res.status(200).json(userData)
})

router.post("/", async (req, res, _next) => {
  const userData = await addUser(req.body)
  res.status(200).json(userData)
})

router.delete("/", async (req, res, _next) => {
  const userData = await deleteAllUser()
  res.status(200).json(userData)
})

router.patch("/status", async (req, res, _next) => {
  const { status, id } = req.body
  if (!status || !id) {
    return res.status(200).json({ message: "No Param" })
  }
  const userData = await updateUserStatus(status, id)
  res.status(200).json(userData)
})

router.patch("/status/all", async (req, res, _next) => {
  const { status } = req.body
  console.log(status);
  if (!status) {
    return res.status(200).json({ message: "No Param" })
  }
  const userData = await updateAllUserStatus(status)
  res.status(200).json(userData)
})

router.get("/active", async (req, res, _next) => {
  const userData = await getUserByStatus("active", 0, 99999)
  const userDataCount = await getUserByStatusCount("active")
  console.log(userDataCount)
  res.status(200).json(userData)
})

router.get("/active/:page", async (req, res, _next) => {
  const { page } = req.params
  const userData = await getUserByStatus("active", (page - 1) * 10)
  const userDataCount = await getUserByStatusCount("active")
  res.status(200).json({ userData, count: userDataCount, page })
})

router.get("/blacklist/:page", async (req, res, _next) => {
  const { page } = req.params
  const userData = await getUserByStatus("blacklist", (page - 1) * 10)
  const userDataCount = await getUserByStatusCount("blacklist")
  res.status(200).json({ userData, count: userDataCount, page })
})

router.get("/blacklist", async (req, res, _next) => {
  const userData = await getUserByStatus("blacklist")
  res.status(200).json(userData)
})

router.get("/winner", async (req, res, _next) => {
  const userData = await getAllWinner()
  res.status(200).json(userData)
})

router.delete("/winner", async (req, res, _next) => {
  const userData = await deleteAllWinner()
  res.status(200).json(userData)
})

router.get("/dashboard", async (req, res, _next) => {
  const totalActiveUser = await getCountUser()
  const totalBlacklistUser = await getCountBlacklist()
  const totalPrize = await getCountprize()
  const winnerData = await getAllWinner()

  res.status(200).json({
    winner: winnerData,
    jumlahUser: totalActiveUser,
    jumlahBlacklistUser: totalBlacklistUser,
    jumlahDoorprize: totalPrize,
  })
})

module.exports = router
