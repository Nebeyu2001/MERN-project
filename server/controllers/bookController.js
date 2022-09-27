const asyncHanlder = require("express-async-handler");
const Book = require("../models/bookModel");

exports.getBooks = asyncHanlder(async (req, res) => {
  const books = await Book.find({});

  res.json(books);
});

exports.getBookById = asyncHanlder(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    res.json(book);
  } else {
    res.status(404);
    throw new Error("Book not found");
  }
});
