const { default: mongoose } = require("mongoose");

const surveySchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  DateOfBirth: { type: String, required: true },
  nationality: { type: String, required: true },
  email: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model('Survey', surveySchema);