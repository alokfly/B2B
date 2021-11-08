const app = require("express");
const router = app.Router();
const {
  addEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/EmployeeController");
router.post("/addEmployee", addEmployee);
router.get("/getEmployee", getEmployee);
router.post("/updateEmployee/:id", updateEmployee);
router.get("/deleteEmployee/:id", deleteEmployee);
module.exports = router;
