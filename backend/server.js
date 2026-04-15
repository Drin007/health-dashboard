const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const healthRoutes = require("./routes/healthRoutes");
app.use("/api/health-data", healthRoutes);

mongoose.connect(process.env.MONGO_URI).then(
    () => console.log("db connected")).catch(err => console.log(err));

app.listen(8000, () => {
    console.log("server running on port 8000");
});