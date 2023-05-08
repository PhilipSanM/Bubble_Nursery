const express = require("express");
const app = express();
const cors = require("cors");
const test = require("./routes/test");

// SETTINGS
app.set("port", process.env.PORT || 4000);
// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/home", test);
module.exports = app;
