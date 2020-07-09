const mongoose = require("../database/connection");

const IntentionSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
    unique: true,
  },

  zipcode_start: {
    type: Number,
    required: true,
  },

  zipcode_end: {
    type: Number,
    required: true,
  },

  lead: {
    type: Boolean,
    default: false,
  },
});

const Intention = mongoose.model("Intention", IntentionSchema);

module.exports = Intention;
