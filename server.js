const express = require("express");
const app = express();
const path = require("path");
const { env, title } = require("process");
const PORT = process.env.PORT || 3000;
const mainRout = require("./router/index");

app.set("view engine", "ejs");

// console.log(app.get("view engin"));   //check engin
// console.log(app.get("views")); //file  check path

//================>> simple one line for view public folder

// app.use(express.static("public")); //use extention in path href eg ".hmtl"

// app.set("views", path.resolve(__dirname) + "/foldername"); // folder name if we want change

//=================>> without routing
// app.get("/", (req, res) => {
//   res.render("index", {
//     title: "Home page",
//   });
// });
// app.get("/about", (req, res) => {
//   res.render("about", {
//     title: "About page",
//   });
// });

//======================> with routing

// app.get("/", (req, res) => {
//   //   res.sendFile(path.join(__dirname, "/index.html"));   Alternative way
//   res.sendFile(path.resolve(__dirname) + "/index.html");
// });
// app.get("/about", (req, res) => {
//   //   res.sendFile(path.join(__dirname, "/index.html"));   Alternative way
//   res.sendFile(path.resolve(__dirname) + "/about.html");
// });

// download in express
// app.get("/download", (req, res) => {
//   res.download(path.resolve(__dirname) + "/about.html");
// });

//=======================> with routing
app.use("/en", mainRout);

app.listen(PORT, () => {
  console.log(`Listing on port ${PORT}`);
});
