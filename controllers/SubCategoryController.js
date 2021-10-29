const SubCategory = require("../models/SubCategory");
var ObjectId = require("mongodb").ObjectID;

module.exports.addSubCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const addSub = await SubCategory.create({
      name,
    });
    return res.status(200).send({ msg: "Sub Category added successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getSubCategoryDetail = async (req, res) => {
  try {
    const response = await SubCategory.find();
    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports.UpdateSubCategory = async (req, res) => {
  let { name } = req.body;
  try {
    const response = await SubCategory.findByIdAndUpdate(
      { _id: ObjectId(req.params.id) },
      {
        name,
      }
    );
    res.status(200).send({ msg: "Sub Category successfully updated" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteSubCategory = async (req, res) => {
  try {
    const response = await SubCategory.findByIdAndDelete({
      _id: ObjectId(req.params.id),
    });
    res.status(200).send({ msg: "Sub Category deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
