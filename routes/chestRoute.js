"use strict";

// modules
const express = require("express"),
  router = express.Router();

// show chest data

// requests
const chestReq = require("../requests/getChest");

router.get("/", function(req, res, next) {
  chestReq();

  next();
});

module.exports = router;