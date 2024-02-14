const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log(`DB is connected`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDB;
