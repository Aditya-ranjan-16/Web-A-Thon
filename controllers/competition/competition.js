const HttpError = require("../../models/HttpError");
const competition = require("../../models/competition");
const { check, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");

const addCompetition = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name } = req.body;

  res.status(202).send(name);
};

exports.addCompetition = addCompetition;
