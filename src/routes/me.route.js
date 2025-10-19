const express = require("express");
const { fetchCatFact } = require("../services/cat.service");
const { CONFIG } = require("../config");

const router = express.Router();

router.get("/", async (req, res) => {
  const payload = {
    status: "success",
    user: {
      email: CONFIG.USER.email,
      name: CONFIG.USER.name,
      stack: CONFIG.USER.stack
    },
    timestamp: new Date().toISOString(),
    fact: await fetchCatFact()
  };
  res.status(200).json(payload);
});

module.exports = router;
