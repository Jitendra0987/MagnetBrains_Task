import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CreateUser from "./pages/createUser";
import AssignTask from "./pages/AssignTask";
import UserDashboard from "./pages/UserDashboard";
import DisplayUserTask from "./pages/DisplayUserTask";
import UserReport from "./pages/userReport";



const App=()=>{
    return(
        
        <>
        
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>  
            <Route path="login" element={<Login/>}/> 
            <Route path="admindashboard" element={<AdminDashboard/>}>
            <Route path="createuser"   element={<CreateUser/>}/>
            <Route path="assigntask"   element={<AssignTask/>}/>
            <Route path="showreport"   element={<UserReport/>}/>
            </Route>
            

            
            <Route path="userdashboard" element={<UserDashboard/>}>
            <Route path="displaytask" element={<DisplayUserTask/>}/>
            

            </Route>
            </Route>

        </Routes>
        </BrowserRouter>

        </>
    )

}
export default App;