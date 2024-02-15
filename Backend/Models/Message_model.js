const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    senderID: {
      type: mongoose.Types.ObjectId,
      ref: "Auth",
      required: true,
    },
    receiverID: {
      type: mongoose.Types.ObjectId,
      ref: "Auth",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const MessageModel = mongoose.model("Message", MessageSchema);
module.exports = MessageModel;
