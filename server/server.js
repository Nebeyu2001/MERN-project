const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./config/db.js");

const bookRouter = require("./routes/bookRouter");

dotenv.config();

const app = express();

connectDB();

// app.get("/", (req, res) => {
//   res.send("API is running.....");
// });

app.use("/books", bookRouter);

// api not found
app.use((req, res, next) => {
  const error = new Error(`not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

//error handler
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
  });
});

app.listen(5000, console.log("server running on port 5000"));
