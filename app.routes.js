const express = require("express");

const router = express.Router();

//controladores
const AppControllers = require("../controllers/app.controller");

//app.get("/", funcion)
router.post("/crearUsuario", AppControllers.crearUsuario);
router.get("/consultarUsuario/:id_user", AppControllers.consultarUsuario);
router.get("/consultarUsuarios", AppControllers.consultarUsuarios);
router.delete("/eliminarusuario/:id_user", AppControllers.eliminarusuario);

module.exports = router;
