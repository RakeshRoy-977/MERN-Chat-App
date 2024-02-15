const jwt = require("jsonwebtoken");
const AuthModel = require("../Models/Auth_model");

const checkUser = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json(`token not found`);
    }
    const decode = jwt.verify(token, process.env.JWT_key);

    if (!decode) {
      return res.status(401).json(`wrong token`);
    }

    const user = await AuthModel.findById(decode.userID).select("-password");

    if (!user) {
      return res.status(401).json(`User not Found !`);
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = checkUser;
