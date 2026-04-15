const express = require("express");
const router = express.Router();
const Health = require("../models/healthModel");

router.post("/", async (req, res) => {
    try{
        const data = new Health(req.body);
        await data.save();
        res.status(201).json( {message: "Data saved successfully"} );
    }catch(err) {
        res.status(500).json({error: err.message }); 
    }
});

router.get("/:device_id", async (req,res) => {
    try{
        const data = await Health.find({ device_id: req.params.device_id }).sort({ _id: -1 }).limit(10);

        res.json(data);
    } catch(err) {
        res.status(500).json({ error: err.message});
    }
});

module.exports = router;