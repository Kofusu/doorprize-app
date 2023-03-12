const bodyParser = require("body-parser")
const { getPrizeDetailJoinSession } = require("../models/prizeModel")
const { GetAllSession, AddSession, removeSession, getSessionDetail } = require("../models/sessionModel")

const router = require("express").Router()

router.use(bodyParser.urlencoded({ extended: false }))

router.get("/", async (req, res, _next) => {
  const userData = await GetAllSession()
  res.status(200).json(userData)
})

router.post("/", async (req, res, _next) => {
  const { sessionName } = req.body

  if (!sessionName) {
    return res.status(401).json({ message: "No Param" })
  }

  const userData = await AddSession(sessionName)
  res.status(200).json({ sessionId: userData })
})

router.delete("/", async (req, res, _next) => {
  const { sessionId } = req.params

  if (!sessionId) {
    return res.status(401).json({ message: "No Param" })
  }
  
  console.log(sessionId);
  const userData = await removeSession(sessionId)
  res.status(200).json({ userData })
})

router.delete("/:sessionId", async (req, res, _next) => {
  const { sessionId } = req.params

  if (!sessionId) {
    return res.status(401).json({ message: "No Param" })
  }
  
  const userData = await removeSession(sessionId)
  res.status(200).json({ userData })
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

module.exports = router
