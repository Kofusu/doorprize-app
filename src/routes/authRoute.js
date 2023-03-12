const bodyParser = require("body-parser")
const { getUsername } = require("../models/authModel")

const router = require("express").Router()

router.use(bodyParser.urlencoded({ extended: false }))

router.post("/login", async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(401).json({ message: "No Param" })
  }

  const [userDb] = await getUsername(username)
  if (password === userDb.password) {
    return res.status(200).json({ username: userDb.username, success: true })
  } else {
    return res.status(401).json({ message: "Password Wrong" })
  }
})

module.exports = router
