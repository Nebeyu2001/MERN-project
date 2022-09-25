const express = require("express");
const dotenv = require("dotenv");
const books = require("./data/books");
const mongoose = require("mongoose");
const connectDB = require("./config/db.js");

dotenv.config();

const app = express();

connectDB();

app.listen(5000, console.log("server running on port 5000"));

app.get("/", (req, res) => {
  res.send("API is running.....");
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const book = books.find((book) => book.id === req.params.id);
  res.json(book);
});
