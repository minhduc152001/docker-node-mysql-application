const { Product } = require("../models");
const { Op } = require("sequelize");

const getAllProducts = (req, res) => {
  Product.findAll()
    .then((products) => {
      res.status(200).json({ data: { status: "success", products } });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getProduct = (req, res) => {
  Product.findAll({ where: { id: req.params.id } })
    .then((product) => {
      res.status(200).json({ data: { status: "success", product } });
    })
    .catch((err) => console.log(err));
};

const searchProduct = async (req, res) => {
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
};

const createNewProduct = async (req, res) => {
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
};

const updateProduct = (req, res) => {
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
};

const deleteProduct = (req, res) => {
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
};

module.exports = {
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
  createNewProduct,
};
