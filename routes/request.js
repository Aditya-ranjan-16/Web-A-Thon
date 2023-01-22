const express = require("express");
const router = express.Router();
const competition = require("../controllers/request/request");
const auth = require("../middleWare/auth");
const { check, validationResult } = require("express-validator");

router.get("/Add", competition.AllCompetition);

// auth
router.use(auth);

module.exports = router;
