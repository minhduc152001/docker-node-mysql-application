const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();

const { Product } = require("../models");

router.get("/", (req, res) => {
  Product.findAll()
    .then((products) => {
      res.status(200).json({ data: { status: "success", products } });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/product/:id", (req, res) => {
  Product.findAll({ where: { id: req.params.id } })
    .then((product) => {
      res.status(200).json({ data: { status: "success", product } });
    })
    .catch((err) => console.log(err));
});

router.get("/searching", async (req, res) => {
  Product.findAll({
    where: {
      [Op.or]: [
        {
          name: { [Op.like]: `%${req.query.text}%` },
        },
        { description: { [Op.like]: `%${req.query.text}%` } },
      ],
    },
  })
    .then((product) => {
      res.status(200).json({ data: { status: "success", product } });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", async (req, res) => {
  // Need: addedByUser

  try {
    const addedByUserId = req.userId || null;
    const result = addedByUserId
      ? await Product.create({ ...req.body, addedByUserId })
      : await Product.create({ ...req.body });
    res.status(201).json({ data: { status: "success", result } });
  } catch (error) {
    console.log(error);
  }
});

router.post("/product/:id", (req, res) => {
  Product.update(
    { ...req.body },
    {
      where: { id: req.params.id },
    }
  )
    .then((result) => {
      res.status(200).json({ data: { stauts: "success", result } });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/product/:id", (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((result) => {
      res.status(204).json({ data: { status: "success" } });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
