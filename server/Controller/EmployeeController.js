 const EmpModel=require("../model/userCreateModel")
 const userTaskAssignModel=require("../model/TaskAssign");
const TaskAssign = require("../model/TaskAssign");

const employeeLogin=async(req,res)=>{
        
           const {userid, password} = req.body;
        

           try {

            const Employee=  await EmpModel.findOne({email:userid})
            
            if(!Employee)
            {
                res.status(400).send({msg:"Invalid Email!!!!"})
            }
            if(Employee.password!=password)
            {
                res.status(400).send({msg:"Invalid password!!!"})
            }
                
           res.status(200).send(Employee);

           } catch (error) {
            console.log(error)
           }
         
}


const empTaskDisplay=async(req,res)=>{
    const {empid}=req.body;
        
    try {
        const Task=await userTaskAssignModel.find({empid:empid});
         res.status(200).send(Task)
    } catch (error) {
         console.log(error);
    }
}


 const empTaskSubmit=async(req,res)=>{
           const {taskid, taskstatus}=req.body;
        //    console.log(req.body)
           try {

               const Task=await userTaskAssignModel.findByIdAndUpdate(taskid,{taskstatus:taskstatus , empreports:"submitted"});
               res.status(200).send("Task successfully submited!!!")
            
           } catch (error) {
                   console.log(error);
           }
 }
           
   
 const deleteEmployeeTask = async (req, res) => {
  try {
    const { taskid } = req.params;
    await  userTaskAssignModel.findByIdAndDelete(taskid);
    res.send("Task deleted successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to delete task");
  }
};

 

module.exports={
    employeeLogin,
    empTaskDisplay,
    empTaskSubmit,
   deleteEmployeeTask,
   
   
}