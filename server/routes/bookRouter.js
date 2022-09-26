const express = require("express");
const asyncHanlder = require("express-async-handler");

const router = express.Router();
const Book = require("../models/bookModel");
// fetch all books
router.get(
  "/",
  asyncHanlder(async (req, res) => {
    const books = await Book.find({});
    res.json(books);
  })
);

// fetch signle book
router.get(
  "/:id",
  asyncHanlder(async (req, res) => {
    const book = await Book.findById(req.params.id);

    if (book) {
      res.json(book);
    } else {
      res.status(404);
      throw new Error("Book not found");
    }
  })
);

module.exports = router;
