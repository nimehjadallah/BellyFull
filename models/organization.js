const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
  organization: { type: String, required: true },
  contactFirstName: { type: String, required: true },
  contactLastName: { type: String, required: true },
  phone: { type: String, required: true },
  streetAddress: { type: String, required: true },
  cityStateZipAddress: { type: String, required: true },
  email: { type: String, required: true},
  password: {type: String, required: true},
  date: { type: Date, defualt: Date.now },
});

const Organization = mongoose.model("Organization", organizationSchema);

module.exports = Organization;
