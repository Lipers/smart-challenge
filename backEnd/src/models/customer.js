const mongoose = require("../database/connection");

const CustomerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  company: {
    type: String,
    required: true,
  },

  cell_phone: {
    type: Number,
    required: true,
  },

  cnpj: {
    type: String,
    required: true,
    unique: true,
  },

  intention: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "intention",
    },
  ],
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;
