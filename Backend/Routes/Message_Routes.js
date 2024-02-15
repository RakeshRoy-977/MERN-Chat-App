const express = require("express");
const { sendMessage, getMessage } = require("../Controllers/Message_con");
const checkUser = require("../middleware/CheckUser");

const routes = express.Router();

routes.get(`/:id`, checkUser, getMessage);
routes.post(`/send/:id`, checkUser, sendMessage);

module.exports = routes;
