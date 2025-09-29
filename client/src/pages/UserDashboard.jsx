import { useEffect, useState } from "react";
import { Link,Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserDashboard=()=>{

    const [empName,setempName]=useState("");
    const [empEmail, setEmpEmail]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        
        setempName(localStorage.getItem("empname"));
        setEmpEmail(localStorage.getItem("empemail"));

    },[])


    const logout=()=>{
        localStorage.clear();
        navigate("/login")
    }
    return(
        <>
        <center>
        <h1 style={{backgroundColor:"white" }}>Employee Dashboard</h1>
        </center>
        <div className="Home">

<div className="sidebar">
   <h3>Dashboard</h3> 
    <ul className="sideheding">
        <li>
        <Link to="displaytask">Display Tasks</Link>
       
        </li>
    </ul>
    
   

</div>


<div className="head">    
<div className="admin-container">
<h3>Welcome Mr. {empName}  </h3>
 <button className="logout-button"  onClick={logout}>
     Logout
   </button>

</div>
      <Outlet/>   
 </div>

</div>

        </>
    )
}
export default UserDashboard;  
