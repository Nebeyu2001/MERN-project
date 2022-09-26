const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const users = require("./data/users.js");
const books = require("./data/books.js");
const User = require("./models/userModel.js");
const Book = require("./models/bookModel.js");
const Order = require("./models/orderModel.js");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Book.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleBooks = books.map((book) => {
      return { ...book, user: adminUser };
    });

    await Book.insertMany(sampleBooks);

    console.log("Data Imported");
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const deportData = async () => {
  try {
    await Order.deleteMany();
    await Book.deleteMany();
    await User.deleteMany();
    console.log("data deported");
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
// deportData();
