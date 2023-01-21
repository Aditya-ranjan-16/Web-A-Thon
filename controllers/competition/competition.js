const HttpError = require("../../models/HttpError");
const Competitions = require("../../models/competitionSchema");
const { check, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");

const addCompetition = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, des, image, categoryName, teamSize } = req.body;

  try {
    let obj = {
      name,
      des,
      image,
      teamSize,
      categoryName,
      host: "host ID",
    };

    let newObj = new Competitions(obj);
    await newObj.save();

    await res.status(202).send("Saved");
  } catch (e) {
    const error = new HttpError("Server Error", 505);
    return next(error);
  }
};

exports.addCompetition = addCompetition;
