const express = require("express");
const route = express.Router();
const apiUserController = require("../../controllers/api/apiUserController");

route.get("/users", apiUserController.all);
route.get("/:id", apiUserController.one);

module.exports = route;