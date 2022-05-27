const express = require("express");
const {
  getAllProducts,
  getProduct,
  searchProduct,
  createNewProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.ctrl");
const router = express.Router();

router.get("/", getAllProducts);

router.get("/product/:id", getProduct);

router.get("/searching", searchProduct);

router.post("/", createNewProduct);

router.post("/product/:id", updateProduct);

router.delete("/product/:id", deleteProduct);

module.exports = router;
