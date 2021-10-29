const app = require("express");
const router = app.Router();
const {
  addCategory,
  getCategoryDetail,
  UpdateCategory,
  deleteCategory,
} = require("../controllers/CategoryController");

router.post("/addCategory", addCategory);
router.get("/getCategoryDetail", getCategoryDetail);
router.post("/UpdateCategory/:id", UpdateCategory);
router.get("/deleteCategory/:id", deleteCategory);

module.exports = router;
