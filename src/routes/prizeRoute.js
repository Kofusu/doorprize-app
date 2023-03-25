const bodyParser = require("body-parser")
const {
  getPrizeDetailJoinSession,
  getDetailPrize,
  getAllPrizeBySession,
  removePrizeById,
} = require("../models/prizeModel")
const { getSessionDetail, GetAllSession } = require("../models/sessionModel")
const { getWinnerPrize } = require("../models/winnerModel")

const router = require("express").Router()

router.use(bodyParser.urlencoded({ extended: false }))

router.get("/", async (req, res, _next) => {
  let data = []

  const prizeData = await getAllPrizeBySession()
  const sessionData = await GetAllSession()

  for (let session of sessionData) {
    data.push({
      id_session: session.id_session,
      nama_session: session.nama_session,
      prize: prizeData.filter((prz) => prz.id_session === session.id_session),
    })
  }

  if (data.length) {
    return res.status(200).json(data)
  }
  res.status(200).json([])
})

router.get("/:sessionId", async (req, res, _next) => {
  const { sessionId } = req.params

  if (!sessionId) {
    return res.status(401).json({ message: "No Param" })
  }

  const prizeData = await getPrizeDetailJoinSession(sessionId)
  if (prizeData.length) {
    return res.status(200).json(prizeData)
  }
  const userData = await getSessionDetail(sessionId)
  res.status(200).json(userData)
})

router.get("/detail/:prizeId", async (req, res, _next) => {
  const { prizeId } = req.params

  if (!prizeId) {
    return res.status(401).json({ message: "No Param" })
  }

  const winnerData = await getWinnerPrize(prizeId)
  const [prizeData] = await getDetailPrize(prizeId)
  res.status(200).json({
    winner: winnerData,
    prize: prizeData,
  })
})

router.delete("/detail/:prizeId", async (req, res, _next) => {
  const { prizeId } = req.params

  const prizeData = await removePrizeById(prizeId)
  res.status(200).json(prizeData)
})

module.exports = router
