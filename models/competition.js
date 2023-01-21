const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const competitionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const competitionList = new mongoose.model("competition", competitionSchema);

module.exports = competitionList;
