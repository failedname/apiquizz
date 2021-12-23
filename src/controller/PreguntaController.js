const db = require("../config/db");

exports.create = (req, res) => {
  const { nombre, categoria } = req.body;
  db.none("INSERT INTO pregunta(nombre,idcategoria) VALUES($1,$2)", [
    nombre,
    categoria,
  ])
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Inserted one pregunta",
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
exports.getPreguntas = (req, res) => {
  db.any(
    "SELECT pregunta.id,  pregunta.nombre,  categoria.nombre as categoria FROM pregunta INNER JOIN categoria ON pregunta.idcategoria = categoria.id"
  ).then((data) => {
    res.status(200).json({
      status: "success",
      message: "Retrieved ALL pregunta",
      data: data,
    });
  });
};
exports.getAll = (req, res) => {
  db.any(
    "SELECT pregunta.id ,  pregunta.nombre,  pregunta.idcategoria,  opcion.nombre as opcion,  opcion.idpregunta,  opcion.resultado,  opcion.id as idopcio FROM pregunta INNER JOIN opcion ON  pregunta.id = opcion.idpregunta WHERE pregunta.idcategoria = $1",
    [req.params.id]
  )
    .then((data) => {
      let datos = [];
      data.forEach((element) => {
        if (datos.length === 0) {
          datos.push({
            id: element.id,
            nombre: element.nombre,
            idcategoria: element.idcategoria,
            opciones: [
              {
                id: element.idopcio,
                nombre: element.opcion,
                idpregunta: element.idpregunta,
                resultado: element.resultado,
              },
            ],
          });
        } else {
          let existe = false;
          datos.forEach((element2) => {
            if (element2.id === element.idpregunta) {
              element2.opciones.push({
                id: element.idopcio,
                nombre: element.opcion,
                idpregunta: element.idpregunta,
                resultado: element.resultado,
              });
              existe = true;
            }
          });
          if (!existe) {
            datos.push({
              id: element.id,
              nombre: element.nombre,
              idcategoria: element.idcategoria,
              opciones: [
                {
                  id: element.idopcio,
                  nombre: element.opcion,
                  idpregunta: element.idpregunta,
                  resultado: element.resultado,
                },
              ],
            });
          }
        }
      });

      res.status(200).json({
        status: "success",
        data: datos,
        message: "Retrieved ALL pregunta",
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
