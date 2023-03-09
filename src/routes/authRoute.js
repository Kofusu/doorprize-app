const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({projectName: "Doorprize Project"})
})

module.exports = router