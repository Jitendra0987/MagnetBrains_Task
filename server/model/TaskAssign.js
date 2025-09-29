

const mongoose=require("mongoose");
 
const taskAssignSchema=new mongoose.Schema({
    tasktitle: String,
    taskDescription: String,
    compdays: String,
    taskstatus:{
        type:String,     //Number type
        default:"No Completed",
    },
    empreports:{
        type:String,   //Number type
        default: "pending",
    },
    empid:{
         type: mongoose.Types.ObjectId, ref:"userCreate"
    }
})
module.exports=mongoose.model("empTask",taskAssignSchema)