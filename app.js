const express = require("express");
const morgan = require("morgan");

const app = express();

const dataBase = require("./dbConection")

//conf
const port = 5001;

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//importacion de rutas
const appRoutes = require("./routes/app.routes");

//routes
app.use("/app", appRoutes);

//ejecucion del app
app.listen(port, () => console.log("Servidor escuchando el puerto", port));