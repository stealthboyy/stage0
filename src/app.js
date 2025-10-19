const express = require("express");
const cors = require("cors");
const meRouter = require("./routes/me.route");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/me", meRouter);

app.use((req, res) => {
  res.status(404).json({ status: "error", message: "Not Found" });
});

app.use((err, req, res, next) => {
  console.error("[error]", err);
  res.status(500).json({ status: "error", message: "Internal Server Error" });
});

module.exports = app;
