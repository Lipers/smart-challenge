const mongoose = require("mongoose");

const db = process.env.DB === "test" ? "test" : "smart";

mongoose.connect(`mongodb://localhost/${db}`);
mongoose.Promise = global.Promise;

module.exports = mongoose;
