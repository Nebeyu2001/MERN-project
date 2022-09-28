const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router.post("/login", userController.authUser);
router.get("/profile", userController.getUserProfile);
router.post("/", userController.registerUser);

module.exports = router;
