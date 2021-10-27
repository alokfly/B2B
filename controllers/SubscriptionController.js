const formidable = require("formidable");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const Subscription = require("../models/Subscription");
const SubscriptionPoint = require("../models/SubscriptionPoint");
const SubscriptionMonth = require("../models/SubscriptionMonth");

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

module.exports.addSubscriptionPoints = async (req, res) => {
  const id = req.params.id;
  const { subcriptionPoints, isValid } = req.body;
  try {
    const response = await SubscriptionPoint.create({
      subcriptionId: id,
      subcriptionPoints,
      isValid,
    });
    return res
      .status(200)
      .json({ msg: "Subscription points successfully added" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getSubscriptionPoints = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await SubscriptionPoint.find({ subcriptionId: id });
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports.updateSubscriptionPoints = async (req, res) => {
  const id = req.params.id;
  const { subcriptionPoints, isValid } = req.body;
  try {
    const response = await SubscriptionPoint.findByIdAndUpdate(
      { _id: id },
      {
        subcriptionPoints,
        isValid,
      }
    );
    return res
      .status(200)
      .json({ msg: "Subscription points successfully updated" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteSubscriptionPoint = async (req, res) => {
  const id = req.params.id;
  try {
    const response = SubscriptionPoint.findByIdAndRemove(id);
    return res
      .status(200)
      .json({ msg: "Subscription points successfully deleted" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.addSubscriptionMonth = async (req, res) => {
  const id = req.params.id;
  const { month, price } = req.body;
  try {
    const response = await SubscriptionMonth.create({
      subcriptionId: id,
      month,
      price,
    });
    return res
      .status(200)
      .json({ msg: "Subscription month successfully added" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getSubscriptionMonth = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await SubscriptionMonth.find({ subcriptionId: id });
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports.updateSubscriptionMonth = async (req, res) => {
  const id = req.params.id;
  const { month, price } = req.body;
  try {
    const response = await SubscriptionMonth.findByIdAndUpdate(
      { _id: id },
      {
        month,
        price,
      }
    );
    return res
      .status(200)
      .json({ msg: "Subscription month successfully updated" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteSubscriptionMonth = async (req, res) => {
  const id = req.params.id;
  try {
    const response = SubscriptionMonth.findByIdAndRemove(id);
    return res
      .status(200)
      .json({ msg: "Subscription points successfully deleted" });
  } catch (error) {
    console.log(error);
  }
};
