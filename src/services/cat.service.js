const axios = require("axios");
const { CONFIG } = require("../config");

async function fetchCatFact() {
  try {
    const resp = await axios.get(CONFIG.CAT_API_URL, { timeout: CONFIG.CAT_API_TIMEOUT_MS });
    const fact = resp && resp.data && resp.data.fact;
    if (typeof fact === "string" && fact.length > 0) return fact;
    return "Could not fetch a cat fact right now.";
  } catch (e) {
    console.error("[catfact] failed:", e.message);
    return "Could not fetch a cat fact right now.";
  }
}

module.exports = { fetchCatFact };
