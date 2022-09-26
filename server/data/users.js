const { model } = require("mongoose");

const users = [
  {
    name: "Neb",
    email: "admin@gmail.com",
    password: 12345,
    isAdmin: true,
  },

  {
    name: "Fili",
    email: "Fili@gmail.com",
    password: 12345,
  },

  {
    name: "Taye",
    email: "Taye@gmail.com",
    password: 12345,
  },
];

model.exports = users;
