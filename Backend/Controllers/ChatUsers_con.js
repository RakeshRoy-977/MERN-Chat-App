const AuthModel = require("../Models/Auth_model");

const getUser = async (req, res, next) => {
  try {
    console.log(`first`);
    const me = req.user._id;
    const otherUsers = await AuthModel.find({ _id: { $ne: me } }).select(
      "-password"
    );
    res.json(otherUsers);
  } catch (error) {
    return res.json(error.message);
  }
};

module.exports = getUser;
