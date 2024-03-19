require("dotenv").config({path:"./.env"});
const express = require("express");
const logger = require("morgan");
const session = require("express-session");
const app = express();

//Route
const usersRoutes = require("./src/routes/usersRoutes");
const apiUserRoute = require("./src/routes/api/apiUserRoute");

//Session 
app.use(session({
    secret : 'topSecret',
    resave: true,
    saveUninitialized: true,
}))

app.use(express.urlencoded({extended:false}));
app.use(express.static("./public/"))
app.use(express.json());
app.use(logger("dev"));

app.set("view engine", "ejs");

//Server up
const PORT = process.env.port || 4200;

app.listen(PORT, () => console.log("Se ha levantado con éxito el servidor: ", PORT));

//Main Route
app.use("/users", usersRoutes);
app.use("/api", apiUserRoute);