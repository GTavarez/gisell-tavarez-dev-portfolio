require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

// -----------------------------
// CORS CONFIG
// -----------------------------
const allowedOrigins = process.env.FRONTEND_ORIGIN.split(",");

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no Origin (Cloud Run, Postman, curl)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Handle preflight requests
app.options("/", cors());

// -----------------------------
// BODY PARSER
// -----------------------------
app.use(express.json());

// -----------------------------
// ROUTES
// -----------------------------
app.use("/api/contact", require("./Routes/contact"));
app.use("/api/projects", require("./Routes/projects"));
app.use("/api/resume", require("./Routes/portfolioResume"));
app.use("/api/resume", require("./Routes/atsResume"));
app.use("/api/resume", require("./Routes/simpleResume"));

// -----------------------------
// EXPORT APP FOR SERVER.JS
// -----------------------------
module.exports = app;
