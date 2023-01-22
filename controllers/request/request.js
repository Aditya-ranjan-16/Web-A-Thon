const HttpError = require("../../models/HttpError");
const request = require("../../models/requestSchema");
const Competitions = require("../../models/competitionSchema");
const { check, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");

// Private || Add Competition
const addReq = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { competitionID, userID, hostID, message } = req.body;

  try {
    let obj = {
      competitionID,
      userID,
      hostID,
      message,
    };

    let newObj = new request(obj);
    await newObj.save();

    res.status(202).send("Saved");
  } catch (e) {
    const error = new HttpError("Server Error", 505);
    console.log(e);
    return next(error);
  }
};

const statusCheck = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { competitionID, userID } = req.body;

  try {
    const requestData = await request.findOne({ competitionID, userID });

    if (!requestData) {
      const error = new HttpError("Wrong competitionID", 400);
      return next(error);
    }

    return res.status(202).send(requestData);
  } catch (e) {
    console.log(e);
    const error = new HttpError("Wrong Email Credentials", 400);
    return next(error);
  }
};

exports.addReq = addReq;
exports.statusCheck = statusCheck;
