const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const { bcryptHash } = require("../utils/bcryptHash");
const generateJwtToken = require("../utils/generateJWT");

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "user already exist" });
    }

    const user = new User({ name, email, password });
    await user.save();
    return res.status(201).json({
      data: {
        user,
        token: generateJwtToken(user._id),
      },
      message: "User Register Successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error, message: "Something wrong wrong" });
  }
};
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordMatch = await bcrypt.compareSync(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    const token = generateJwtToken(user._id);
    return res.status(200).json({
      data: {
        user,
        token,
      },
      message: "Sign In successful",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error, message: "Something went wrong" });
  }
};

const signOut = async (req, res) => {
  try {
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Logout failed" });
  }
};

module.exports = {
  signIn,
  signUp,
  signOut,
};
