const express = require("express");
const router = express.Router();
const request = require("../controllers/request/request");
const auth = require("../middleWare/auth");
const { check, validationResult } = require("express-validator");

// Private || Add Request to join a event
router.get(
  "/Add",
  [check("competitionID", "competitionID is Required").not().isEmpty()],
  [check("userID", "userID is Required").not().isEmpty()],
  [check("hostID", "hostID is Required").not().isEmpty()],
  [check("message", "message is Required").not().isEmpty()],
  request.addReq
);

// auth
router.use(auth);

module.exports = router;
