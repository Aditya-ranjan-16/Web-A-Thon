const HttpError = require("../../models/HttpError");
const Competitions = require("../../models/competitionSchema");
const user = require("../../models/userSchema");
const { check, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");

// Private || All Events of the user
const getUserEvents = async (req, res, next) => {
  let userData;
  try {
    userData = await user.findOne({ email: res.locals.userData.userEmail });

    if (userData) {
      console.log(userData._id);
      //   let competitionData = Competitions.find({ host: userData._id });

      //   res.status(202).send(competitionData);
    }
  } catch (e) {
    const error = new HttpError("Email Not Found", 505);
    console.log(e);
    return next(error);
  }
};

exports.getUserEvents = getUserEvents;
