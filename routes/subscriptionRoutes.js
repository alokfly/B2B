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
  addSubscription,
  getSubscriptionDetails,
  updateSubscription,
  deleteSubscription,
} = require("../controllers/SubscriptionController");
router.post("/addSubscription", upload.single("myField"), addSubscription);
router.get("/getSubscriptionDetails", getSubscriptionDetails);
router.post("/updateSubscription/:id", updateSubscription);
router.get("/deleteSubscription/:id", deleteSubscription);
module.exports = router;
