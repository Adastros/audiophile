require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const assetRouter = require("./controllers/assetController");
const pageRouter = require("./controllers/pageController");
// const mongoose = require("mongoose");
const morgan = require("morgan"); // middleware used to monitor http requests to backend

// configures morgan to display info about http requests when testing
morgan.token("body", (req) => {
  return JSON.stringify(req.body);
});

// Middleware
// app.use(express.static("build"));
app.use(cors());
app.use(express.json()); // Parses requests with json type
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

// Routes
app.use("/api/assets", assetRouter);
app.use("/api/page", pageRouter);

const PORT = process.env.LOCAL_PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
