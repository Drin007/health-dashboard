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


const PORT = process.env.PORT || 8000; // earlier it was showing error in render as i used only port no. 8000 therefore learned this part's importance during deploying this assignment
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});