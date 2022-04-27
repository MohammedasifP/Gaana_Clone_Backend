require("dotenv").config();
const express=require('express');
const cors=require('cors');
const mongoose=require("mongoose");
const fetch=require("node-fetch");
const app=express();
      app.use(express.json());
      app.use(cors());
const connect=()=>{
    mongoose.connect("mongodb+srv://asif:asif_456@cluster0.ep2by.mongodb.net/outh?retryWrites=true&w=majority");
}

const {register,login}=require('./controllers/auth.controller');
const songController=require('./controllers/song.controller');
const favcontroller=require('./controllers/favourite.controller')

  
app.post("/register",register)
app.post("/login",login);
app.use("/allsongs",songController);
app.use("/fav",favcontroller)


app.get("/song",async(req,res)=>{
  try {
      const song=req.query.q
      const response=await fetch(`https://apg-saavn-api.herokuapp.com/result/?q=${song}`)
       res.json(await response.json())
  } catch (error) {
      res.status(500).send(error.message);
  }
})

// app.get("/mysongs",)
app.listen(process.env.PORT || 5500, async function () {
    try {
      await connect();
      console.log("app is listening on port 5500");
    } catch (err) {
      console.log(err.message);
    }
  });
