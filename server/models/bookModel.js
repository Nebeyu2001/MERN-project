const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    title: { type: String, required: true },
    image: { type: String, required: true },
    country: { type: String },
    language: String,
    pages: Number,
    year: Number,
    category: String,
    description: String,
    rating: { type: Number, default: 0 },
    numReviews: Number,
    price: { type: Number, default: 0 },
    countInStock: { type: Number, default: 0 },
    author: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
