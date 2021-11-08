require("dotenv").config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const crypto = require("crypto");
const smsKey = process.env.SMS_SECRET_KEY;
const twilioNum = process.env.TWILIO_PHONE_NUMBER;
const jwt = require("jsonwebtoken");
const {
  AccessTokenInstance,
} = require("twilio/lib/rest/verify/v2/service/accessToken");

module.exports.sendOtp = async = (req, res) => {
  const phone = req.body.phone;
  const otp = Math.floor(100000 + Math.random() * 900000);
  const ttl = 2 * 60 * 1000;
  const expires = Date.now() + ttl;
  const data = `${phone}.${otp}.${expires}`;
  const hash = crypto.createHmac("sha256", smsKey).update(data).digest("hex");
  const fullHash = `${hash}.${expires}`;

  client.messages
    .create({
      body: `Your One Time Login Password ${otp}`,
      from: +13185150971,
      to: phone,
    })
    .then((messages) => console.log(messages))
    .catch((err) => console.error(err));

  res.status(200).send({ phone, hash: fullHash });
};

module.exports.verifyOtp = async = (req, res) => {
  const phone = req.body.phone;
  const hash = req.body.hash;
  const otp = req.body.otp;
  let [hashValue, expires] = hash.split(".");

  let now = Date.now();
  if (now > parseInt(expires)) {
    return res.status(504).send({ msg: "Timeout. Please try again" });
  }
  let data = `${phone}.${otp}.${expires}`;
  let newCalculatedHash = crypto
    .createHmac("sha256", smsKey)
    .update(data)
    .digest("hex");
  if (newCalculatedHash === hashValue) {
    console.log("user confirmed");

    return res.status(201).json({ msg: "Login successfull", data: phone });
  } else {
    console.log("not authenticated");
    return res.status(400).send({ verification: false, msg: "Incorrect OTP" });
  }
};

module.exports.logout = async = (req, res) => {
  res
    .clearCookie("refreshToken")
    .clearCookie("accessToken")
    .clearCookie("authSession")
    .clearCookie("refreshTokenID")
    .send("logout");
};
