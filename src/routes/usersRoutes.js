const express = require("express");
const route = express.Router();
const usersControllers = require("../controllers/usersControllers");
const upload = require("../middlewares/multer");
const {arrRegister, validateRegister} = require("../middlewares/validateRegister")

route.get("/login", usersControllers.login);
route.post("/login", usersControllers.actLogin);
route.get("/register", usersControllers.register);
route.post("/register", upload.single("image"), arrRegister, validateRegister, usersControllers.actRegister);
route.get("/profile", usersControllers.profile);
route.get("/logout", usersControllers.logout)


module.exports = route;