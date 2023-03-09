// Define Environment Variable
require("dotenv").config()

// Import Ext
const express = require("express")
const path = require("path")
const cors = require("cors")
const bodyParser = require("body-parser")

// Import Int
const authRoute = require("./routes/authRoute")
const prizeRoute = require("./routes/prizeRoute")
const sessionRoute = require("./routes/sessionRoute")
const userRoute = require("./routes/userRoute")
const sequelize = require("./models")

// Initialitation
const app = express()
const PORT = process.env.PORT || 4000

// Test DB
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.")
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error)
  })

// Static Page
app.use("/public", express.static(path.join(__dirname, "public")))
app.use(express.static(path.join(__dirname, "..", "client", "dist")))

// Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

// API Handle
app.use("/api/auth", authRoute)
app.use("/api/prize", prizeRoute)
app.use("/api/session", sessionRoute)
app.use("/api/user", userRoute)

// Forward To Client
app.get("*", async (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"))
})

app.listen(PORT, () => {
  console.log(`server run on http://127.0.0.1:${PORT}`)
})
