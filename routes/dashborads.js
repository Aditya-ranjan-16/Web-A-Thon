const express = require("express");
const router = express.Router();
const dashboard = require("../controllers/Dashboard/dashboard");
const auth = require("../middleWare/auth");
const { check, validationResult } = require("express-validator");

// auth
router.use(auth);

// Private || Get all events from the user
router.post("/Get", dashboard.getUserEvents);

module.exports = router;
