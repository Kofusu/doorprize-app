const {
  getSession,
  createSession,
} = require("../controllers/sessionController")

const router = require("express").Router()

router.get("/", getSession)

router.post("/", createSession)

module.exports = router
