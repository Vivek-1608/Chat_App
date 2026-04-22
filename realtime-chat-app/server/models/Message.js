const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  id: String,        // 🔥 unique message id
  room: String,
  username: String,
  message: String,
  time: String,
});

module.exports = mongoose.model("Message", messageSchema);