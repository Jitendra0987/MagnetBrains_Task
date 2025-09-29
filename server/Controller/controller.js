const admiModel=require("../model/model.js")
const userCreatModel=require("../model/userCreateModel")
const taskAssignModel=require("../model/TaskAssign")


const Datasave=async(req,res)=>{
      const {userid, password}=req.body;

      try {

        const Admin =await admiModel.findOne({userid:userid});
        if(!Admin)
        {
          res.status(400).send({msg:"invalid user id"});
        }
        if(Admin.password!=password)
        {
          res.status(400).send({msg:" invalid password "});
        }

        res.status(200).send(Admin);

      } catch (error) {

        console.log(error);
      }

    }


    const userCreated=async(req,res)=>{
    const  { username , email , designation, password }=req.body;
     
        try {
   
           const userdata= await userCreatModel.create({           
            username:username,
            email:email,
            designation:designation,
            password: password

          })

       res.status(200).json({success:true,message:"user created "});
        
       } catch (error) {
            
        console.error('Error sending email:');
        res.status(500).json({ success: false, error: error.message});

       }
         
     }


     const userDataDisplay= async(req,res)=>{
          try {

             const Data= await userCreatModel.find();
             res.status(200).send(Data)
            
          } catch (error) {
               console.log(error);
          }
     }


    const  assigntask=async(req,res)=>{
             
      const  { empid, tasktitle, taskDescription,compdays }=req.body;

      try {
           
     const emplooye =await taskAssignModel.create({
          tasktitle:tasktitle,
          taskDescription: taskDescription,
          compdays: compdays,
          empid:empid

        })
        res.status(200).send("Task Succesfully Assigned!");
      } catch (error) {
        console.log(error)
      }

    }


    const ShowReport=async(req,res)=>{ 
          
         try {
          const task =await taskAssignModel.find().populate("empid");
          res.status(200).send(task)
          
         } catch (error) {
          console.log(error);
          
         }
    }

    const TaskReassign=async(req,res)=>{
           
      const {taskid}=req.body

      try {

        const Data=await taskAssignModel.findByIdAndUpdate(taskid,{empreport:"pending"})
          res.send({msg:"Task succesfully Re Assigned!!!"})
      } catch (error) {
        
        console.log(error);
                
      }

    }


module.exports={
    Datasave,
    userCreated,
    userDataDisplay,
    assigntask,
    ShowReport,
    TaskReassign
}