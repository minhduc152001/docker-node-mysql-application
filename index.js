const express = require("express");
const app = express();
const sequelize = require("./config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Environment
require("dotenv").config();

// Router
const productRoutes = require("./routes/products.route");
const userRoutes = require("./routes/user.route");

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/users", userRoutes);

sequelize
  .sync()
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log("Server is running...");
    });
  })
  .catch((err) => {
    console.log(err);
  });
