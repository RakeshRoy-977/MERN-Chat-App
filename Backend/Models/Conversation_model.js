const mongoose = require("mongoose");

const conversationSchema = mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Auth",
      },
    ],
    messages: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const ConversationModel = mongoose.model("Conversation", conversationSchema);
module.exports = ConversationModel;
