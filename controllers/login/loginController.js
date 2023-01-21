const HttpError = require("../../models/HttpError");
const user = require("../../models/userSchema");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");

const register = async (req, res, next) => {
  res.status(202).send("Hello");
};

exports.register = register;
