const formidable = require("formidable");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const Subscription = require("../models/Subscription");

module.exports.addSubscription = async (req, res) => {
  let profile = req.file ? req.file.filename : null;
  let { name, description } = req.body;
  const response = await Subscription.create({
    name,
    description,
    profile,
  });
  res.status(200).json({ msg: "Your subscription has been submitted" });
};

module.exports.getSubscriptionDetails = async (req, res) => {
  try {
    const response = await Subscription.find();
    res.status(200).json({ data: response });
  } catch (error) {
    console.log(error);
  }
};

module.exports.updateSubscription = async (req, res) => {
  let profile = req.file ? req.file.filename : null;
  const id = req.params.id;
  let { name, description } = req.body;
  try {
    const response = await Subscription.findByIdAndUpdate(id, {
      profile,
      name,
      description,
    });
    return res.status(200).json({ msg: "Your subscription has been updated" });
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message });
  }
};

module.exports.deleteSubscription = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Subscription.findByIdAndRemove(id);
    return res.status(200).json({ msg: "Your Subscription has been deleted" });
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message });
  }
};
