require("dotenv").config();
const express = require("express");
const connectToDB = require("./DB");
const cors = require("cors");

const app = express();

//midwaears
app.use(cors());
app.use(express.json());

//DB connection
connectToDB();

//Routes
app.use(`/api/auth`, require("./Routes/Auth_Routes"));

//listing
app.listen(process.env.PORT, () => {
  console.log(`server is up at ${process.env.PORT}`);
});
