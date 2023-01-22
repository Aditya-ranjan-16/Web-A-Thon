const HttpError = require("../../models/HttpError");
const request = require("../../models/requestSchema");
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

exports.addReq = addReq;
