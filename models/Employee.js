const { model, Schema } = require("mongoose");
const employeeSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    mobileno: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    aadharno: {
      type: Number,
      required: true,
    },
    maritalstatus: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    fatherfirstname: {
      type: String,
      required: true,
    },
    fatherlastname: {
      type: String,
      required: true,
    },
    motherfirstname: {
      type: String,
      required: true,
    },
    motherlastname: {
      type: String,
      required: true,
    },
    currentaddress: {
      type: String,
      required: true,
    },
    currentcity: {
      type: String,
      required: true,
    },
    currentstate: {
      type: String,
      required: true,
    },
    currentpincode: {
      type: Number,
      required: true,
    },
    permanentaddress: {
      type: String,
      required: true,
    },
    permanentcity: {
      type: String,
      required: true,
    },
    permanentstate: {
      type: String,
      required: true,
    },
    permanentpincode: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("employee", employeeSchema);
