const express = require("express");
const route = express.Router();
const usersControllers = require("../controllers/usersControllers");
const upload = require("../middlewares/multer");
const {arrRegister, validateRegister} = require("../middlewares/validateRegister");
const {arrLogin, validateLogin} = require("../middlewares/validateLogin");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

route.get("/login", guestMiddleware, usersControllers.login);
route.post("/login", arrLogin, validateLogin, usersControllers.actLogin);
route.get("/register", guestMiddleware, usersControllers.register);
route.post("/register", upload.single("image"), arrRegister, validateRegister, usersControllers.actRegister);
route.get("/profile", authMiddleware, usersControllers.profile);
route.get("/logout", usersControllers.logout)


module.exports = route;