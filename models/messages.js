const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    senderId:{
     type: mongoose.Schema.Types.ObjectId,
     ref: "users"
    },
    receiverId: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "questions"
    },
    message:{
     type: String
    }
 },{timesatamps: true})

const Message = mongoose.model("messages", messageSchema);

module.exports = Message;