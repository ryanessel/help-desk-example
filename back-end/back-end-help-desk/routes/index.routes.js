const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});


router.get("/hello", (req, res, next) => {
  res.json("hellomessage");
});
module.exports = router;
