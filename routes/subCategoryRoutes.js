const app = require("express");
const router = app.Router();
const {
  addSubCategory,
  getSubCategory,
  getSubCategoryDetail,
  UpdateSubCategory,
  deleteSubCategory,
} = require("../controllers/SubCategoryController");

router.post("/addSubCategory", addSubCategory);
router.get("/getSubCategory", getSubCategory);
router.get("/getSubCategoryDetail/:id", getSubCategoryDetail);
router.post("/UpdateSubCategory/:id", UpdateSubCategory);
router.get("/deleteSubCategory/:id", deleteSubCategory);

module.exports = router;
