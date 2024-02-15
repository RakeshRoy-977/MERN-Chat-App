const express = require("express");
const checkUser = require("../middleware/CheckUser");
const getUser = require("../Controllers/ChatUsers_con");

const routes = express.Router();

routes.get("/", checkUser, getUser);

module.exports = routes;
