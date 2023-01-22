const express = require("express");
const router = express.Router();
const request = require("../controllers/request/request");
const auth = require("../middleWare/auth");
const { check, validationResult } = require("express-validator");

// auth
// router.use(auth);

// Private || Get all events from the user
router.post(
  "/Add",
  [check("competitionID", "competitionID is Required").not().isEmpty()],
  [check("userID", "userID is Required").not().isEmpty()],
  [check("hostID", "hostID is Required").not().isEmpty()],
  [check("message", "message is Required").not().isEmpty()],
  request.addReq
);

module.exports = router;
