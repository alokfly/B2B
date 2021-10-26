const formidable = require("formidable");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const Subscription = require("../models/Subscription");

module.exports.addSubscription = (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, async (error, fields, files) => {
    const { name, description } = fields;
    const errors = [];
    if (name === "") {
      errors.push({ msg: "Title is required" });
    }
    if (description === "") {
      errors.push({ msg: "Description is required" });
    }
    if (Object.keys(files).length === 0) {
      errors.push({ msg: "Image is required" });
    } else {
      const { type } = files.image;
      const split = type.split("/");
      const extension = split[1].toLowerCase();
      if (extension !== "jpg" && extension !== "jpeg" && extension !== "png") {
        errors.push({ msg: `${extension} is not a valid extension` });
      } else {
        files.image.name = uuidv4() + "." + extension;
      }
    }
    if (errors.length !== 0) {
      return res.status(400).json({ errors, files });
    } else {
      const newPath = __dirname + `/../images/${files.image.name}`;
      fs.copyFile(files.image.path, newPath, async (error) => {
        if (!error) {
          try {
            const response = await Subscription.create({
              name,
              image: files.image.name,
              description,
            });
            return res.status(200).json({
              msg: "successfully subscribed",
              response,
            });
          } catch (error) {
            return res.status(500).json({ errors: error, msg: error.message });
          }
        }
      });
    }
  });
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
  const form = formidable({ multiples: true });
  form.parse(req, (errors, fields, files) => {
    const id = req.params.id;
    const { name, description } = fields;
    const imageErrors = [];
    const error = [];
    if (name === "") {
      error.push({ msg: "Title is required" });
    }
    if (description === "") {
      error.push({ msg: "Description is required" });
    }
    if (Object.keys(files).length === 0) {
      errors.push({ msg: "Please choose image" });
    } else {
      const { type } = files.image;
      const split = type.split("/");
      const extension = split[1].toLowerCase();
      if (extension !== "jpg" && extension !== "jpeg" && extension !== "png") {
        imageErrors.push({ msg: `${extension} is not a valid extension` });
      } else {
        files.image.name = uuidv4() + "." + extension;
      }
    }
    if (imageErrors.length !== 0) {
      return res.status(400).json({ errors: imageErrors });
    } else {
      const newPath = __dirname + `/../images/${files.image.name}`;
      fs.copyFile(files.image.path, newPath, async (error) => {
        if (!error) {
          try {
            const response = await Subscription.findByIdAndUpdate(id, {
              image: files.image.name,
              name,
              description,
            });
            return res
              .status(200)
              .json({ msg: "Your subscription has been updated" });
          } catch (error) {
            return res.status(500).json({ errors: error, msg: error.message });
          }
        }
      });
    }
  });
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
