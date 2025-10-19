const CONFIG = {
  PORT: process.env.PORT || 3000,
  CAT_API_URL: process.env.CAT_API_URL || "https://catfact.ninja/fact",
  CAT_API_TIMEOUT_MS: Number(process.env.CAT_API_TIMEOUT_MS || 4000),
  USER: {
    email: process.env.USER_EMAIL ,
    name: process.env.USER_NAME ,
    stack: process.env.USER_STACK
  }
};

module.exports = { CONFIG };
