const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const aboutUsRouter = require("./routes/aboutUs");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/about-us", aboutUsRouter);

// ... existing code ...
