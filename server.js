const express = require("express");
const app = express();

const path = require("path");
const { env } = require("process");

app.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "/index.html"));   Alternative way
  res.sendFile(path.resolve(__dirname) + "/index.html");
});
app.get("/about", (req, res) => {
  //   res.sendFile(path.join(__dirname, "/index.html"));   Alternative way
  res.sendFile(path.resolve(__dirname) + "/about.html");
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("listing on port 3000");
});
