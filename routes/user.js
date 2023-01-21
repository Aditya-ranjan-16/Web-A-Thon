const express = require("express");
const router = express.Router();
// const userController = require("../controllers/user/userController");
// const auth = require("../middleWare/auth");
const { check, validationResult } = require("express-validator");

router.post(
  "/sendEmail",
  [check("email", "email is Required").not().isEmpty()],
  [check("message", "message is Required").not().isEmpty()],
  [check("name", "name is Required").not().isEmpty()],
  async(req,res)=>{
    res.status(202).send("Hello send")
  }
);

module.exports = router;
