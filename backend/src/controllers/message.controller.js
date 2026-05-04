const Message = require("../models/Message.model");
const Chat = require("../models/Chat.model");
const log = require("../utils/logMyError");
const createMessage = async (req, res) => {
  try {
    log("input received", req.body);
    const { content, chatId } = req.body;
    if (!content || !chatId) {
      return res.status(400).json({
        message: "content or chatId is missing",
      });
    }

    const chat = await Chat.findOne({ _id: chatId, users: req.userId });
    if (!chat) {
      return res.status(403).json({ message: "Access denied" });
    }

    const message = await Message.create({
      sender: req.userId,
      content,
      chat: chatId,
    });

    const populatedMessage = await Message.findById(message._id).populate(
      "sender",
      "_id name email avatar",
    );

    await Chat.findByIdAndUpdate(chatId, {
      latestMessage: message._id,
    });

    return res.status(201).json({
      data: populatedMessage,
      message: "message has been created",
    });
  } catch (error) {
    log("error received");
    return res.status(500).json({ message: "something went wrong" });
  }
};
const fetchMessage = async (req, res) => {
  try {
    const chatId = req.params.chatId;

    const chat = await Chat.findOne({ _id: chatId, users: req.userId });
    if (!chat) {
      return res.status(403).json({ message: "Access denied" });
    }

    const limit = Math.min(parseInt(req.query.limit) || 20, 100);
    const page = Math.max(1, parseInt(req.query.page) || 1);
    let skipDocument = limit * (page - 1);

    const [messages, totalMessages] = await Promise.all([
      Message.find({ chat: chatId })
        .populate("sender", "_id name email avatar")
        .sort({ createdAt: -1 })
        .skip(skipDocument)
        .limit(limit)
        .lean(),
      Message.countDocuments({ chat: chatId }),
    ]);

    if (!messages || messages.length == 0 || totalMessages == 0) {
      if (messages.length === 0) {
        return res.status(200).json({
          data: { messages: [], page, limit, totalPages: 0 },
          message: "No messages found",
        });
      }
    }

    return res.status(200).json({
      data: {
        messages,
        page,
        limit,
        totalpages: Math.ceil(totalMessages / limit),
        hasMore: page * limit < totalMessages,
      },
      message: "messages fetched successully",
    });
  } catch (error) {
    return res.status(500).json({ message: "something went wrong" });
  }
};
module.exports = {
  createMessage,
  fetchMessage,
};
