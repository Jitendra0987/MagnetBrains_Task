const express=require("express");
const route=express.Router();
const employeecontroller=require("../Controller/EmployeeController")

 route.post("/employeelogin",employeecontroller.employeeLogin);
 route.post("/emptaskdisplay",employeecontroller.empTaskDisplay);
 route.post("/employeetasksubmit",employeecontroller.empTaskSubmit);
 route.delete("/employee/deletetask/:taskid", employeecontroller.deleteEmployeeTask);
 

 
module.exports=route;  