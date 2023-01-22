const HttpError = require("../../models/HttpError");
const request = require("../../models/requestSchema");
const Competitions = require("../../models/competitionSchema");
const user = require("../../models/userSchema");
const { check, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");

// Private || Add Competition
const addReq = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    competitionID,
    // userID,
    hostID,
    message,
  } = req.body;

  let users;
  try {
    users = await user.findOne({ email: res.locals.userData.userEmail });

    if (users) {
      try {
        let obj = {
          competitionID,
          userID: users._id,
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
    }
  } catch (e) {
    const error = new HttpError("Email Not Found", 505);
    console.log(e);
    return next(error);
  }
};

// Private || Status Check
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

    return res.status(202).send({ status: true, requestData });
  } catch (e) {
    console.log(e);
    const error = new HttpError("Wrong Email Credentials", 400);
    return next(error);
  }
};

const AcceptReq = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { competitionID, userID } = req.body;

  res.status(202).send("Accept");
};

exports.addReq = addReq;
exports.statusCheck = statusCheck;
exports.AcceptReq = AcceptReq;
