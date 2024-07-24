const router = require("express").Router();
const productData = require("../productsData");

router.get("/products", (req, res) => {
  res.render("products", {
    title: "products page",
  });
});

router.get("/api/products", (req, res) => {
  res.json(productData);
});

module.exports = router;
