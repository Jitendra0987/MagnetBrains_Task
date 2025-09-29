import { useEffect, useState } from "react";
import {useNavigate}  from "react-router-dom";
import {Link,Outlet} from "react-router-dom";



const AdminDashboard=()=>{
    const [adminname,setAdminname]=useState("");
    const navigate=useNavigate()


    useEffect(()=>{
                
           if(! localStorage.getItem("adminname")){
                    navigate("/login")
           }
            
             setAdminname(localStorage.getItem("adminname"));
    },[])

    const logout=()=>{
          localStorage.clear();
          navigate("/login")

    }

    return(
        <>


           <div className="Home">

             <div className="sidebar">
                <h3>Dashboard</h3> 
                <ul className="sideheding">
                  <li>
                <Link to="createuser">CreateUser</Link> <br />
                <Link to="assigntask">AssignTask</Link><br />
                <Link to="showreport">UserReport</Link>
                </li>
                </ul>

             </div>


            <div className="head">    
            <div className="admin-container">
             <h3>Welcome Mr. {adminname}</h3>
              <button className="logout-button" onClick={logout}>
                  Logout
                </button>


            </div>
                   <Outlet/>   
              </div>

          </div>

     
        </>
    )
}
 export default AdminDashboard;