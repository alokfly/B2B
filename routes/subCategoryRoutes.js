const app = require("express");
const router = app.Router();
const {
  addSubCategory,
  getSubCategoryDetail,
  UpdateSubCategory,
  deleteSubCategory,
} = require("../controllers/SubCategoryController");

router.post("/addSubCategory", addSubCategory);
router.get("/getSubCategoryDetail", getSubCategoryDetail);
router.post("/UpdateSubCategory/:id", UpdateSubCategory);
router.get("/deleteSubCategory/:id", deleteSubCategory);

module.exports = router;
