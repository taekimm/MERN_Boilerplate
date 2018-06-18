//each individual schema goes here:

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//if using bcrypt
// const bcrypt = require('bcrypt');

let PlayerSchema = new Schema(
  {
    player_name: {
      type: String,
      required: [true, "Please insert a first name."],
      minlength: [2, "Player name must be at least 2 characters in length."]
    },

    position: {
      type: String
    },

    game1: {
      type: String,
      default: "undecided"
    },

    game2: {
      type: String,
      default: "undecided"
    },

    game3: {
      type: String,
      default: "undecided"
    }
  },
  { timestamps: true }
);

mongoose.model("Player", PlayerSchema);
