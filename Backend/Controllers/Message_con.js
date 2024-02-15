const { json } = require("express");
const ConversationModel = require("../Models/Conversation_model");
const MessageModel = require("../Models/Message_model");

//send message
const sendMessage = async (req, res, next) => {
  try {
    const message = req.body.message;
    const { id: receiverID } = req.params;
    const senderID = req.user._id;

    if (senderID === receiverID) {
      return json(`You cant send Message to yourSelf`);
    }

    let conversation = await ConversationModel.findOne({
      participants: { $all: [senderID, receiverID] },
    });

    if (!conversation) {
      conversation = await ConversationModel.create({
        participants: [senderID, receiverID],
      });
    }

    const newMessage = new MessageModel({
      senderID,
      receiverID,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    await Promise.all([newMessage.save(), conversation.save()]);

    res.json(newMessage);
  } catch (error) {
    return res.json(error.message);
  }
};

const getMessage = async (req, res, next) => {
  try {
    const { id: userID } = req.params;
    const senderID = req.user._id;

    const AllTexts = await ConversationModel.findOne({
      participants: { $all: [senderID, userID] },
    }).populate("messages");

    if (!AllTexts) {
      return res.json([]);
    }
    const texts = AllTexts.messages;
    res.json(texts);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};
module.exports = { sendMessage, getMessage };
