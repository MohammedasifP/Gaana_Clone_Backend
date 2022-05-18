const mongoose=require('mongoose');


const favouriteSchema=new mongoose.Schema({
    id:{type:Number,required:true, unique:false},
    song:{type:String,required:true, unique:false},
    url:{type:String,required:true , unique:false},
    artists:{type:String,required:true , unique:false},
    cover_image:{type:String,required:true , unique:false},
    duration:{type:String,required:true , unique:false},
    type:{type:String,required:true , unique:false},
    user_id:{type:String,required:true , unique:false}
},{
    versionKey:false,
    timestamps:true

})

const Favourite=mongoose.model("favourite",favouriteSchema)

module.exports=Favourite;