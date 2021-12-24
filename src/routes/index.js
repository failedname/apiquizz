const { Router } = require("express");
const router = Router();
const Categoria = require("../controller/CategoriaController");
const Opcion = require("../controller/OpcionController");
const Pregunta = require("../controller/PreguntaController");
const Ganador = require("../controller/ganadorController");

//Routes categoria
router.post("/categoria", Categoria.create);
router.get("/categoria", Categoria.getALL);
router.get("/categorias", Categoria.getCategoria);

//Routes pregunta
router.post("/pregunta", Pregunta.create);
router.get("/pregunta/:id", Pregunta.getAll);
router.get("/pregunta", Pregunta.getPreguntas);

//Routes opcion
router.post("/opcion", Opcion.create);
router.get("/opcion", Opcion.getAll);

//Routes ganador
router.post("/ganador", Ganador.create);
router.get("/ganador", Ganador.getAll);

router.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API REST Creada",

    urls: {
      categoria: "/categoria",
      pregunta: "/pregunta",
      opcion: "/opcion",
      ganador: "/ganador",
    },
  });
});

module.exports = router;
