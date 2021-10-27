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
  addSubscriptionPoints,
  getSubscriptionPoints,
  updateSubscriptionPoints,
  deleteSubscriptionPoint,
  addSubscriptionMonth,
  getSubscriptionMonth,
  updateSubscriptionMonth,
  deleteSubscriptionMonth,
} = require("../controllers/SubscriptionController");
router.post("/addSubscription", upload.single("myField"), addSubscription);
router.get("/getSubscriptionDetails", getSubscriptionDetails);
router.post(
  "/updateSubscription/:id",
  upload.single("myField"),
  updateSubscription
);
router.get("/deleteSubscription/:id", deleteSubscription);

router.post("/addSubscriptionPoints/:id", addSubscriptionPoints);
router.get("/getSubscriptionPoints/:id", getSubscriptionPoints);
router.post("/updateSubscriptionPoints/:id", updateSubscriptionPoints);
router.get("/deleteSubscriptionPoint/:id", deleteSubscriptionPoint);

router.post("/addSubscriptionMonth/:id", addSubscriptionMonth);
router.get("/getSubscriptionMonth/:id", getSubscriptionMonth);
router.post("/updateSubscriptionMonth/:id", updateSubscriptionMonth);
router.post("/deleteSubscriptionMonth/:id", deleteSubscriptionMonth);
module.exports = router;
