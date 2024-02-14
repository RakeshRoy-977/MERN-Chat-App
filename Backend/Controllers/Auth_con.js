const AuthModel = require("../Models/Auth_model");
const bcrypt = require("bcryptjs");
const getJwt = require("../utils/GetJwt");

const signUp = async (req, res, next) => {
  try {
    const { fullName, email, password, gender } = req.body;
    const CheckUser = await AuthModel.findOne({ email });
    if (CheckUser) {
      return res.json(`User already exits`);
    }
    const hashedPass = await bcrypt.hash(password, 10);

    const boy = `https://avatar.iran.liara.run/public/boy`;
    const girl = `https://avatar.iran.liara.run/public/girl`;

    const newUser = new AuthModel({
      fullName,
      email,
      password: hashedPass,
      gender,
      profilePic: gender === "male" ? boy : girl,
    });

    if (newUser) {
      getJwt(newUser._id, res); //getting jwt

      await newUser.save();
      res.json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.json(`Please Fill details`);
    }
  } catch (error) {
    return res.json(error.message);
  }
};

//login
const login = async (req, res, next) => {
  try {
  } catch (error) {
    return res.json(error.message);
  }
};

//logout
const logout = async (req, res, next) => {
  try {
  } catch (error) {
    return res.json(error.message);
  }
};

module.exports = { signUp, login, logout };
