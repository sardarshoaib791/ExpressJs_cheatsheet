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
router.post("/api/products", (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(422).json({ error: "All field are required" });
  }
  const product = {
    name,
    price: "$" + price,
    id: new Date().getTime().toString(),
  };

  productData.push(product);
  res.json(product);
});

module.exports = router;
