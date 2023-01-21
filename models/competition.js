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
  },
  participants: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  category: [
    {
      name: {
        type: String,
        required: true,
      },
    },
  ],
  date: { type: Date, default: Date.now },
});

const competitionList = new mongoose.model("competition", competitionSchema);

module.exports = competitionList;
