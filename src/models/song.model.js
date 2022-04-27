const mongoose=require('mongoose');

const songSchema=new mongoose.Schema({
    id:{type:Number,required:true},
    song:{type:String,required:true},
    url:{type:String,required:true},
    artists:{type:String,required:true},
    cover_image:{type:String,required:true},
    duration:{type:String,required:true},
    type:{type:String,required:true}
})

const Song=mongoose.model("song",songSchema);

module.exports=Song;
// "id":1,
//        "song":"Afreen Afreen",
//        "url":"http://hck.re/Rh8KTk",
//        "artists":"Rahat Fateh Ali Khan, Momina Mustehsan",
//        "cover_image":"http://hck.re/kWWxUI",
//        "duration":"6:40",
//        "type":"Trending"