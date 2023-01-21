const express = require("express");
const router = express.Router();
const competition = require("../controllers/competition/competition");
const auth = require("../middleWare/auth");
const { check, validationResult } = require("express-validator");

// auth
// router.use(auth);

// Public || Get user Data
router.post(
  "/add",
  [check("name", "name is Required").not().isEmpty()],
  [check("des", "des is Required").not().isEmpty()],
  [check("image", "image is Required").not().isEmpty()],
  [check("categoryName", "categoryName is Required").not().isEmpty()],
  [check("teamSize", "teamSize is Required").not().isEmpty()],
  competition.addCompetition
);

module.exports = router;
