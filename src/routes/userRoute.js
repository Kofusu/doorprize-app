const {
  getUserActive,
  getUserBlacklist,
  getUser,
} = require("../controllers/userController")

const router = require("express").Router()

router.get("/", getUser)

router.get("/active", getUserActive)

router.get("/blacklist", getUserBlacklist)

module.exports = router
