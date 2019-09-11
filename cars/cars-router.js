const express = require("express");

const db = require("../data/db-config");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("cars")
    .where({ id })
    .first()
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve car with that ID" });
    });
});

router.post("/", (req, res) => {
  const carsData = req.body;
  db("cars")
    .insert(carsData)
    .then(cars => {
      db("cars")
        .where({ id: cars[0] })
        .then(newCarEntry => {
          res.status(201).json(newCarEntry);
        });
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

module.exports = router;
