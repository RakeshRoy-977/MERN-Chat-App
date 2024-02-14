const express = require("express");
const { signUp, login, logout } = require("../Controllers/Auth_con");

const routes = express.Router();

routes.post(`/signup`, signUp);
routes.post(`/login`, login);
routes.post(`/logout`, logout);

module.exports = routes;
