const express=require('express');
const router=express.Router();
const Favourite=require('../models/favourite.model');


router.post("",async(req,res)=>{
    console.log(req.body)
try {
    const favsong=await Favourite.create(req.body);
    return res.status(200).send(favsong);
} catch (error) {
    return res.status(500).send(error.message)
}
})

router.get("",async(req,res)=>{
    try {
        const userid=req.query.id;
        const favsongs=await Favourite.find({user_id:userid});
        return res.status(200).send(favsongs)
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const delsong=await Favourite.findByIdAndDelete(req.params.id);
        return res.status(200).send(delsong)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

module.exports=router;