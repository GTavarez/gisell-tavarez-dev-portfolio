const express = require("express");
const app = express();

const resumeRoute = require("./Routes/resume");

app.use("/resume/pdf", resumeRoute);
