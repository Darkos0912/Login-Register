require("dotenv").config({path:"./.env"});
const express = require("express");
const logger = require("morgan");
const app = express();

const usersRoutes = require("./src/routes/usersRoutes");

app.use(express.urlencoded({extended:false}));
app.use(express.static("./public/"))
app.use(express.json());
app.use(logger("dev"));

app.set("view engine", "ejs");

const PORT = process.env.port || 4200;


app.listen(PORT, () => console.log("Se ha levantado con éxito el servidor: ", PORT));

app.use("/users", usersRoutes);