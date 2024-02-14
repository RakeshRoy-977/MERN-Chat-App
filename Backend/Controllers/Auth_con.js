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
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.json(`Please Fill details`);
    }
  } catch (error) {
    return res.json(error.message);
  }
};

//login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const CheckUser = await AuthModel.findOne({ email });
    if (!CheckUser) {
      return res.json(`User dosnt exits`);
    }

    const comparePassword = await bcrypt.compare(password, CheckUser.password);
    if (!comparePassword) {
      return res.json(`wrong information`);
    }

    getJwt(CheckUser._id, res); //getting jwt

    res.json({
      _id: CheckUser._id,
      fullName: CheckUser.fullName,
      email: CheckUser.email,
      profilePic: CheckUser.profilePic,
    });
  } catch (error) {
    return res.json(error.message);
  }
};

//logout
const logout = async (req, res, next) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.json(`Logged out successfully`);
  } catch (error) {
    return res.json(error.message);
  }
};

module.exports = { signUp, login, logout };
