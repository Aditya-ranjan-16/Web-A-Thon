const express = require("express");
const router = express.Router();
const userController = require("../controllers/user/userController");
const loginController = require("../controllers/login/loginController");
const auth = require("../middleWare/auth");
const { check, validationResult } = require("express-validator");

// Public || Get Register User
router.post(
  "/signup",
  [check("email", "email is Required").not().isEmpty()],
  [check("email", "email is Required").not().isEmpty()],
  [check("password", "password is Required").not().isEmpty()],
  loginController.register
);

// auth
router.use(auth);

// Public || Get user Data
router.post(
  "/",
  [check("email", "email is Required").not().isEmpty()],
  userController.getUser
);

module.exports = router;
