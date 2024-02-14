const jwt = require("jsonwebtoken");

const getJwt = async (userID, res) => {
  try {
    const token = jwt.sign({ userID }, process.env.JWT_key, {
      expiresIn: "15d",
    });
    res.cookie("jwt", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000, //ms
      httpOnly: true,
    });
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = getJwt;
