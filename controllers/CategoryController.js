const Category = require("../models/Category");
var ObjectId = require("mongodb").ObjectID;

module.exports.addCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const addSub = await Category.create({
      name,
    });
    return res.status(200).send({ msg: "Category added successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getCategoryDetail = async (req, res) => {
  try {
    const response = await Category.find();
    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports.UpdateCategory = async (req, res) => {
  let { name } = req.body;
  try {
    const response = await Category.findByIdAndUpdate(
      { _id: ObjectId(req.params.id) },
      {
        name,
      }
    );
    res.status(200).send({ msg: "Category successfully updated" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteCategory = async (req, res) => {
  try {
    const response = await Category.findByIdAndDelete({
      _id: ObjectId(req.params.id),
    });
    res.status(200).send({ msg: "Category deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
