const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

const VIEWS_DIR = "views";

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, VIEWS_DIR, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, VIEWS_DIR, "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, VIEWS_DIR, "contact-me.html"));
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, VIEWS_DIR, "404.html"));
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log("We are listening on 3000.");
});
