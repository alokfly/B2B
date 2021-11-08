const app = require("express");
const router = app.Router();
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

var upload = multer({ storage: storage });
const {
  addNewsType,
  getNewsType,
  updateNewsType,
  deleteNewsType,
  addNewsContent,
  getNewsContent,
  updateNewsContent,
  deleteNewsContent,
} = require("../controllers/NewsController");

router.post("/addNewsType", addNewsType);
router.get("/getNewsType", getNewsType);
router.post("/updateNewsType/:id", updateNewsType);
router.get("/deleteNewsType/:id", deleteNewsType);

router.post("/addNewsContent/:id", upload.single("myField"), addNewsContent);
router.get("/getNewsContent/:id", getNewsContent);
router.post(
  "/updateNewsContent/:id",
  upload.single("myField"),
  updateNewsContent
);
router.get("/deleteNewsContent/:id", deleteNewsContent);

module.exports = router;
