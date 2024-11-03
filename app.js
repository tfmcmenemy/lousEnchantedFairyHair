//https://heroicons.com/

const express = require("express");
const app = express();
const path = require("path");

const port = 5050;

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Set the directory for the views
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
