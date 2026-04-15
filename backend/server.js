const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const healthRoutes = require("./routes/healthRoutes");
app.use("/api/health-data", healthRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/healthDB").then(
    () => console.log("db connected")).catch(err => console.log(err));

app.listen(8000, () => {
    console.log("server running on port 8000");
});