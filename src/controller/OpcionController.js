const db = require("../config/db");
exports.getAll = (req, res) => {
  db.any(
    "SELECT pregunta.nombre as pregunta, opcion.nombre as opcion, opcion.resultado as resultado, opcion.id FROM opcion INNER JOIN pregunta ON opcion.idpregunta = pregunta.id"
  ).then((data) => {
    res.status(200).json({
      status: "success",
      message: "Inserted one opcion",
      data: data,
    });
  });
};
exports.create = (req, res) => {
  const { nombre, pregunta, resultado } = req.body;
  db.none("INSERT INTO opcion(nombre,idpregunta,resultado) VALUES($1,$2,$3)", [
    nombre,
    pregunta,
    resultado,
  ])
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Inserted one opcion",
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
