const express = require("express");
const route = express.Router();
const usersControllers = require("../controllers/usersControllers");

route.get("/login", usersControllers.login);

module.exports = route;