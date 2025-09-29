const express= require("express");
const app= express();
const PORT=8000;
const cors= require("cors");
const mongoose=require("mongoose");
const adminRoute= require("./routes/route");
const emplooyeRoute=require("./routes/EmployeeRoute");
const bodyparser = require('body-parser');







mongoose.connect(`mongodb://127.0.0.1:27017/Taskmanagementsystem`).then(()=>{
    console.log("DB connected!");
})
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use("/admin", adminRoute);
app.use("/employee",emplooyeRoute);


app.listen(PORT, ()=>{
    console.log(`Server run on  ${PORT}`);
})  