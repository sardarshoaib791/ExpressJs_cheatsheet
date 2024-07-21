const express = require("express");
const app = express();
const path = require("path");
const { env } = require("process");
const PORT = process.env.PORT || 3000;

// app.use(express.static("public"));

app.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "/index.html"));   Alternative way
  res.sendFile(path.resolve(__dirname) + "/index.html");
});
app.get("/about", (req, res) => {
  //   res.sendFile(path.join(__dirname, "/index.html"));   Alternative way
  res.sendFile(path.resolve(__dirname) + "/about.html");
});

app.listen(3000, () => {
  console.log("listing on port 3000");
});
