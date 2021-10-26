const app = require("express");
const router = app.Router();
const {
  addSubscription,
  getSubscriptionDetails,
  updateSubscription,
  deleteSubscription,
} = require("../controllers/SubscriptionController");
router.post("/addSubscription", addSubscription);
router.get("/getSubscriptionDetails", getSubscriptionDetails);
router.post("/updateSubscription/:id", updateSubscription);
router.get("/deleteSubscription/:id", deleteSubscription);
module.exports = router;
