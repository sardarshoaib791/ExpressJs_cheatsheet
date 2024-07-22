const router = require("express").Router();
const apiKeyMiddleware = require("../middleware/apiKey");

router.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "about page",
  });
});

router.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/about.html");
});

router.get("/api/products", apiKeyMiddleware, (req, res) => {
  res.json([
    {
      id: "123",
      product: "chrome",
    },
    {
      id: "1234",
      product: "fireFox",
    },
  ]);
});

module.exports = router;
