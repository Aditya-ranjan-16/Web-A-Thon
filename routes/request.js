const express = require("express");
const router = express.Router();
const request = require("../controllers/request/request");
const auth = require("../middleWare/auth");
const { check, validationResult } = require("express-validator");

// Private || Add Request to join a event
router.get("/Add", request.addReq);

// auth
router.use(auth);

module.exports = router;
