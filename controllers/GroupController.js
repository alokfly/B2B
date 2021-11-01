const Group = require("../models/Group");
var ObjectId = require("mongodb").ObjectID;

module.exports.addGroup = async (req, res) => {
  let image = req.file ? req.file.filename : null;
  let { name, category_name, sub_category_name } = req.body;
  try {
    const response = await Group.create({
      name,
      category_name,
      sub_category_name,
      image,
    });
    res.status(200).json({ msg: "Group has been submitted" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getGroupDetail = async (req, res) => {
  try {
    const response = await Group.find();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports.updateGroup = async (req, res) => {
  let image = req.file ? req.file.filename : null;
  let { name, category_name, sub_category_name } = req.body;
  try {
    const response = await Group.findByIdAndUpdate(
      {
        _id: ObjectId(req.params.id),
      },
      {
        name,
        category_name,
        sub_category_name,
        image,
      }
    );
    return res.status(200).json({ msg: "Group has been updated" });
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message });
  }
};

module.exports.deleteGroup = async (req, res) => {
  try {
    const response = await Group.findByIdAndDelete({
      _id: ObjectId(req.params.id),
    });
    res.status(200).send({ msg: "Group deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
