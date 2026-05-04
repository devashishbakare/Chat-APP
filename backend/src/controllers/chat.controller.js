const Chat = require("../models/Chat.model");
const User = require("../models/User.model");
const log = require("../utils/logMyError");
const createChat = async (req, res) => {
  try {
    const currentUserId = req.userId;
    const { userId } = req.body;
    console.log(req.body);
    if (!userId) {
      return res.status(400).json({ message: "input user missing" });
    }

    const otherUser = await User.findById(userId);
    if (!otherUser) {
      return res.status(400).json({ message: "User not found" });
    }

    const existingChat = await Chat.findOne({
      isChatGroup: false,
      users: { $all: [currentUserId, otherUser._id], $size: 2 },
    })
      .populate("users", "-password")
      .populate("latestMessage");

    if (existingChat) {
      return res.status(200).json({
        data: existingChat,
        message: "chat accessed successfully",
      });
    }

    const newChat = await Chat.create({
      users: [currentUserId, otherUser._id],
    });

    const populatedChat = await Chat.findById(newChat._id)
      .populate("users", "-password")
      .populate("latestMessage");

    return res.status(200).json({
      data: populatedChat,
      message: "chat created successfully",
    });
  } catch (error) {
    //console.log(error.stack);
    return res.status(500).json({ message: "something went wrong" });
  }
};

const fetchChat = async (req, res) => {
  try {
    const userId = req.userId;
    log("data received", userId);
    const chat = await Chat.find({ users: userId })
      .populate("users", "-password")
      .populate("latestMessage")
      .populate("groupAdmin", "-password")
      .sort({ updatedAt: -1 })
      .lean();
    return res
      .status(200)
      .json({ data: chat, message: "fetched all chat of user" });
  } catch (error) {
    log("error received");
    return res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = {
  createChat,
  fetchChat,
};
