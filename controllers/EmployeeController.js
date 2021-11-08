const Employee = require("../models/Employee");
var ObjectId = require("mongodb").ObjectID;

module.exports.addEmployee = async (req, res) => {
  const {
    firstname,
    lastname,
    dob,
    gender,
    mobileno,
    email,
    aadharno,
    maritalstatus,
    qualification,
    fatherfirstname,
    fatherlastname,
    motherfirstname,
    motherlastname,
    currentaddress,
    currentcity,
    currentstate,
    currentpincode,
    permanentaddress,
    permanentcity,
    permanentstate,
    permanentpincode,
  } = req.body;
  try {
    const addSub = await Employee.create({
      firstname,
      lastname,
      dob,
      gender,
      mobileno,
      email,
      aadharno,
      maritalstatus,
      qualification,
      fatherfirstname,
      fatherlastname,
      motherfirstname,
      motherlastname,
      currentaddress,
      currentcity,
      currentstate,
      currentpincode,
      permanentaddress,
      permanentcity,
      permanentstate,
      permanentpincode,
    });
    return res.status(200).send({ msg: "Employee added successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getEmployee = async (req, res) => {
  try {
    const response = await Employee.find();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports.updateEmployee = async (req, res) => {
  const {
    firstname,
    lastname,
    dob,
    gender,
    mobileno,
    email,
    aadharno,
    maritalstatus,
    qualification,
    fatherfirstname,
    fatherlastname,
    motherfirstname,
    motherlastname,
    currentaddress,
    currentcity,
    currentstate,
    currentpincode,
    permanentaddress,
    permanentcity,
    permanentstate,
    permanentpincode,
  } = req.body;
  try {
    const response = await Employee.findByIdAndUpdate(
      {
        _id: ObjectId(req.params.id),
      },
      {
        firstname,
        lastname,
        dob,
        gender,
        mobileno,
        email,
        aadharno,
        maritalstatus,
        qualification,
        fatherfirstname,
        fatherlastname,
        motherfirstname,
        motherlastname,
        currentaddress,
        currentcity,
        currentstate,
        currentpincode,
        permanentaddress,
        permanentcity,
        permanentstate,
        permanentpincode,
      }
    );
    return res.status(200).json({ msg: "Employee has been updated" });
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message });
  }
};

module.exports.deleteEmployee = async (req, res) => {
  try {
    const response = await Employee.findByIdAndDelete({
      _id: ObjectId(req.params.id),
    });
    res.status(200).send({ msg: "Employee deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
