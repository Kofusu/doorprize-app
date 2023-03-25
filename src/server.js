// Define Environment Variable
require("dotenv").config()

// Import Ext
const express = require("express")
const http = require('http');
const bodyParser = require("body-parser")
const path = require("path")
const cors = require("cors")

// Import Int
const authRoute = require("./routes/authRoute")
const prizeRoute = require("./routes/prizeRoute")
const sessionRoute = require("./routes/sessionRoute")
const userRoute = require("./routes/userRoute")
const uploadRoute = require("./routes/uploadRoute")
const sequelize = require("./models")

// Initialitation
const app = express()
const server = http.createServer(app);
const { Server } = require("socket.io");
const { generateWinner } = require("./models/prizeModel");
const { addWinner } = require("./models/winnerModel");
const { updateUserStatus } = require("./models/userModel");
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173'
  }
});
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

// API Handle
app.use("/api/auth", authRoute)
app.use("/api/prize", prizeRoute)
app.use("/api/session", sessionRoute)
app.use("/api/user", userRoute)
app.use("/api/upload", uploadRoute)

// Forward To Client
app.get("*", async (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"))
})

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  socket.on('generate', async ({id_prize, max_winner}) => {
    const winners = await generateWinner(max_winner)

    for (let winner of winners) {
      await addWinner(winner.id_user, id_prize)
      await updateUserStatus(winner.status, winner.id_user)
    }

    console.log(id_prize, max_winner);
    io.emit("generateWinner", winners)
  })
});

server.listen(PORT, () => {
  console.log(`server run on http://127.0.0.1:${PORT}`)
})
