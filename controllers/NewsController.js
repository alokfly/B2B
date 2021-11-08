const NewsType = require("../models/NewsType");
const NewsContent = require("../models/NewsContent");
const ObjectId = require("mongodb").ObjectID;

module.exports.addNewsType = async (req, res) => {
  try {
    let { name } = req.body;
    const response = await NewsType.create({
      name,
    });
    return res.status(200).json({ msg: "News Type successfully added" });
  } catch (error) {
    return res.status(401).json(error);
  }
};

module.exports.getNewsType = async (req, res) => {
  try {
    const response = await NewsType.find();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports.updateNewsType = async (req, res) => {
  let { name } = req.body;
  try {
    const response = await NewsType.findByIdAndUpdate(
      {
        _id: ObjectId(req.params.id),
      },
      {
        name,
      }
    );
    return res.status(200).json({ msg: "News Type has been updated" });
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message });
  }
};

module.exports.deleteNewsType = async (req, res) => {
  try {
    const response = await NewsType.findByIdAndDelete({
      _id: ObjectId(req.params.id),
    });
    res.status(200).send({ msg: "News Type deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.addNewsContent = async (req, res) => {
  let profile = req.file ? req.file.filename : null;
  let { newsTitle, newsTypeId } = req.body;
  try {
    const response = await NewsContent.create({
      newsTypeId,
      newsTitle,
      image: profile,
    });
    return res.status(200).json({ msg: "Content successfully added" });
  } catch (error) {
    return res.status(401).json(error);
  }
};

module.exports.getNewsContent = async (req, res) => {
  try {
    const response = await NewsContent.find({
      newsTypeId: ObjectId(req.params.id),
    });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports.updateNewsContent = async (req, res) => {
  let profile = req.file ? req.file.filename : null;
  let { newsTitle, newsTypeId } = req.body;
  try {
    const response = await NewsContent.findByIdAndUpdate(
      {
        _id: ObjectId(req.params.id),
      },
      {
        newsTypeId,
        newsTitle,
        image: profile,
      }
    );
    return res.status(200).json({ msg: "News content has been updated" });
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message });
  }
};

module.exports.deleteNewsContent = async (req, res) => {
  try {
    const response = await NewsContent.findByIdAndDelete({
      _id: ObjectId(req.params.id),
    });
    res.status(200).send({ msg: "News Content deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
