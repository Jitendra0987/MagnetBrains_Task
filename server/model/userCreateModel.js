 
const mongoose =require("mongoose");

const userCreateSchema=new mongoose.Schema({
          
       username:String,
       email:String,
       designation:String,
       password:String 
})
module.exports=mongoose.model("userCreate",userCreateSchema)
