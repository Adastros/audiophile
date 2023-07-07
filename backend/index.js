require("dotenv").config();
const express = require("express");
const app = express();
const assetRouter = require("./controllers/assetController");
// const mongoose = require("mongoose");
const morgan = require("morgan"); // middleware used to monitor http requests to backend

// configures morgan to display info about http requests when testing
morgan.token("body", (req) => {
  return JSON.stringify(req.body);
});

// Middleware
// app.use(express.static("build"));
app.use(express.json()); // Parses requests with json type
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

// Routes
app.use("/api/assets", assetRouter);

const PORT = process.env.LOCAL_PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});