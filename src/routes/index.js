const { Router } = require("express");
const router = Router();
const Categoria = require("../controller/CategoriaController");
const Opcion = require("../controller/OpcionController");
const Pregunta = require("../controller/PreguntaController");
const Ganador = require("../controller/ganadorController");

//Routes categoria
router.post("/categoria", Categoria.create);
router.get("/categoria", Categoria.getALL);

//Routes pregunta
router.post("/pregunta", Pregunta.create);
router.get("/pregunta/:id", Pregunta.getAll);
router.get("/pregunta", Pregunta.getPreguntas);

//Routes opcion
router.post("/opcion", Opcion.create);
router.get("/opcion", Opcion.getAll);

//Routes ganador
router.post("/ganador", Ganador.create);

module.exports = router;
