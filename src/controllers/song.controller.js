const express=require('express');
const router=express.Router();
const Song=require("../models/song.model.js");

router.post("",async(req,res)=>{
    try {
        const song=await Song.create(req.body);
        return res.send(song)
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

router.get("", async (req, res) => {
    try {
      const songs = await Song.find().lean().exec();
      return res.send(songs);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports = router;