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
  addGroup,
  getGroupDetail,
  updateGroup,
  deleteGroup,
} = require("../controllers/GroupController");

router.post("/addGroup", upload.single("myField"), addGroup);
router.get("/getGroupDetail", getGroupDetail);
router.post("/updateGroup/:id", upload.single("myField"), updateGroup);
router.get("/deleteGroup/:id", deleteGroup);

module.exports = router;
