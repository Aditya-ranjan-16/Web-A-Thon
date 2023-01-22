const HttpError = require("../../models/HttpError");
const Competitions = require("../../models/competitionSchema");
const user = require("../../models/userSchema");
const { check, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");

// Private || All Events of the user
const getUserEvents = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email } = req.body;

  let users;
  try {
    users = await user.findOne({ email });

    if (!user) {
      const error = new HttpError("Wrong email", 400);
      return next(error);
    }

    let competitionData = await Competitions.find({
      host: users._id,
    });

    res.status(202).send(competitionData);
  } catch (e) {
    const error = new HttpError("Server Error", 505);
    console.log(e);
    return next(error);
  }
};

// Private

exports.getUserEvents = getUserEvents;
