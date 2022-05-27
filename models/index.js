const Product = require("./products.model");
const User = require("./users.model");

User.hasMany(Product, { foreignKey: "userId" });
Product.belongsTo(User);

module.exports = { User, Product };
