const router = require("express").Router();

router.get("/products", (req, res) => {
  res.render("products", {
    title: "products page",
  });
});

module.exports = router;
