const app = require("express");
const router = app.Router();

const { sendOtp, verifyOtp, logout } = require("../controllers/UserController");

router.post("/sendOtp", sendOtp);
router.post("/verifyOtp", verifyOtp);
router.get("/logout", logout);

module.exports = router;
