const db = require("../config/db");

exports.create = (req, res) => {
  const { nombre, nivel } = req.body;

  db.none("INSERT INTO categoria(nombre,nivel) VALUES($1,$2) ", [nombre, nivel])
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "Inserted one categoria",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        status: "error",
        message: err.message,
      });
    });
};

exports.getALL = (req, res) => {
  db.any("SELECT * FROM categoria")
    .then((data) => {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL categoria",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        status: "error",
        message: err.message,
      });
    });
};

//categorias que contengas preguntas
exports.getCategoria = (req, res) => {
  db.any(
    "SELECT DISTINCT categoria.id,  categoria.nombre,  categoria.nivel FROM categoria INNER JOIN pregunta ON  categoria.id = pregunta.idcategoria INNER JOIN opcion ON  pregunta.id = opcion.idpregunta"
  ).then((data) => {
    res.status(200).json({
      status: "success",
      message: "Retrieved ALL categoria",
      data: data,
    });
  });
};
