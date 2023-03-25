const router = require("express").Router()
const { json } = require("body-parser")
const bodyParser = require("body-parser")
const multer = require("multer")
const path = require("path")
const { addPrize } = require("../models/prizeModel")

const diskStorageBg = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "public"))
  },
  filename: function (req, res, cb) {
    cb(null, "Background.png")
  },
})

const diskStoragePrize = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "public", "img"))
  },
  filename: function (req, res, cb) {
    cb(null, Date.now().toString() + ".png")
  },
})

router.use(bodyParser.urlencoded({ extended: true }))

router.post(
  "/background",
  multer({ storage: diskStorageBg }).single("theFiles"),
  async (req, res, _next) => {
    const { file } = req
    if (!file) {
      res.status(400).json({
        status: false,
        data: "No File is selected.",
      })
    }
    res.status(200).json(file)
  },
)

router.post(
  "/prize",
  multer({ storage: diskStoragePrize }).single("theFiles"),
  async (req, res, _next) => {
    const {
      file: { filename },
      body: { caption, id_session, unit },
    } = req;
    if (!req.file || !caption || !id_session || !unit) {
      return res.status(400).json({
        status: false,
        data: "No File is selected.",
      })
    }
    console.log(caption, filename, id_session, unit)
    const prizeData = await addPrize(caption, filename, id_session, unit)
    console.log(prizeData)
    res.status(200).json(prizeData)
  },
)

module.exports = router
