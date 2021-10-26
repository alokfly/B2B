const express = require("express");
const bodyParser = require("body-parser");
const connect = require("./config/db");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
var cors = require("cors");

require("dotenv").config();
const app = express();

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

// demoflyweis.in:5060

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Your app is running`);
});
