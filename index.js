const express = require("express");
const bodyParser = require("body-parser");
const connect = require("./config/db");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const subCategoryRoutes = require("./routes/subCategoryRoutes");
const adminRoutes = require("./routes/adminRoutes");
const groupRoutes = require("./routes/groupRoutes");
const userRoutes = require("./routes/userRoutes");
const newsRoutes = require("./routes/newsRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
var cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
app.use(cookieParser());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

connect();
app.use(bodyParser.json());
app.use("/", subscriptionRoutes);
app.use("/", categoryRoutes);
app.use("/", subCategoryRoutes);
app.use("/", adminRoutes);
app.use("/", groupRoutes);
app.use("/", userRoutes);
app.use("/", newsRoutes);
app.use("/", employeeRoutes);

// demoflyweis.in:5060

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Your app is running`);
});
