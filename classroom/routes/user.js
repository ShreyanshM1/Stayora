const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get for users");
});

module.exports = router;