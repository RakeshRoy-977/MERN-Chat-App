require("dotenv").config();
const express = require("express");
const connectToDB = require("./DB");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

//midwaears
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//DB connection
connectToDB();

//Routes
app.use(`/api/auth`, require("./Routes/Auth_Routes"));
app.use(`/api/message`, require("./Routes/Message_Routes"));
app.use(`/api/users`, require("./Routes/ChatUsers_Routes"));

//listing
app.listen(process.env.PORT, () => {
  console.log(`server is up at ${process.env.PORT}`);
});
