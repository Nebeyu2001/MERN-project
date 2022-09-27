const express = require("express");

const bookController = require("../controllers/bookController");

const router = express.Router();

// fetch all books
router.get("/", bookController.getBooks);

// fetch signle book
router.get("/:id", bookController.getBookById);

module.exports = router;
