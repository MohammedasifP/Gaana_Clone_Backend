const mongoose=require('mongoose');


const favouriteSchema=new mongoose.Schema({
    id:{type:Number,required:true},
    song:{type:String,required:true},
    url:{type:String,required:true},
    artists:{type:String,required:true},
    cover_image:{type:String,required:true},
    duration:{type:String,required:true},
    type:{type:String,required:true},
    user_id:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true

})

const Favourite=mongoose.model("favourite",favouriteSchema)

module.exports=Favourite;