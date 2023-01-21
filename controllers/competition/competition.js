const HttpError = require("../../models/HttpError");
const Competitions = require("../../models/competitionSchema");
const { check, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");

// Private || Add Competition
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
      category: {},
      host: "host ID",
    };

    obj.category.name = categoryName;

    let newObj = new Competitions(obj);
    await newObj.save();

    res.status(202).send("Saved");
  } catch (e) {
    const error = new HttpError("Server Error", 505);
    console.log(e);
    return next(error);
  }
};

const EditCompetition = async (req, res, next) => {};

// Private || Delete Competition
const DeleteCompetition = async (req, res, next) => {};

exports.addCompetition = addCompetition;
exports.EditCompetition = EditCompetition;
exports.addCompetition = addCompetition;
