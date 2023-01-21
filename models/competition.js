const mongoose = require("mongoose");

const competitionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  teamSize: {
    type: "number",
    required: true,
  },
  participants: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  date: { type: Date, default: Date.now },
});

const competitionList = new mongoose.model("competition", competitionSchema);

module.exports = competitionList;
