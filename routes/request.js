const express = require("express");
const router = express.Router();
const request = require("../controllers/request/request");
const auth = require("../middleWare/auth");
const { check, validationResult } = require("express-validator");

// auth
// router.use(auth);

// Private || Add Request to join a event
router.post(
  "/Add",
  [check("competitionID", "competitionID is Required").not().isEmpty()],
  [check("userID", "userID is Required").not().isEmpty()],
  [check("hostID", "hostID is Required").not().isEmpty()],
  [check("message", "message is Required").not().isEmpty()],
  request.addReq
);

// Private || Request Status Check
router.post(
  "/Status",
  [check("competitionID", "competitionID is Required").not().isEmpty()],
  [check("userID", "userID is Required").not().isEmpty()],
  request.statusCheck
);

module.exports = router;
