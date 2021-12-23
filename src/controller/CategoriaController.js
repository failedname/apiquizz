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
