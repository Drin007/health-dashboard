const mongoose = require("mongoose");

const healthSchema = new mongoose.Schema({
    device_id: String,
    heart_rate: Number,
    spo2: Number,
    timestamp: String
});

module.exports = mongoose.model("Health", healthSchema);