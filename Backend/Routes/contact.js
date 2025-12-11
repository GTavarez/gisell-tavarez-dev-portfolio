const express = require("express");
const router = express.Router();

const { sendMessage } = require("../Controllers/contactController");

router.post("/", sendMessage);

module.exports = router;
