const db = require("../config/db");
exports.create = (req, res) => {
  const { jugador, score } = req.body;
  console.log(req);
  console.log(nombre);
  db.none("INSERT INTO ganador(nombre,puntos) VALUES($1,$2)", [jugador, score])
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Inserted one ganador",
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