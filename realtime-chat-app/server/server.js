const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const mongoose = require("mongoose");
const Message = require("./models/Message");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
require("dotenv").config();

const server = http.createServer(app);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Fetch old messages
app.get("/messages/:room", async (req, res) => {
  try {
    const messages = await Message.find({ room: req.params.room });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Join room
  socket.on("joinRoom", ({ username, room }) => {
    socket.join(room);
    console.log(`${username} joined room: ${room}`);
  });

  // Send message
  socket.on("sendMessage", async (data) => {
    const { room, username, message } = data;

    const messageData = {
      id: uuidv4(), // 🔥 unique id
      room,
      username,
      message,
      time: new Date().toLocaleTimeString(),
    };

    console.log("Message received:", messageData);

    // Save to DB
    const newMessage = new Message(messageData);
    await newMessage.save();

    // Emit to room
    io.to(room).emit("receiveMessage", messageData);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});