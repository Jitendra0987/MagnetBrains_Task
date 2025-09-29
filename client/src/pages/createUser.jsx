import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';



const CreateUser=()=>{
   const [input, setInput]=useState({});

    const handelChange=(e)=>{
         let name=e.target.name;
         let value=e.target.value;
         setInput(values=>({...values,[name]:value}));
         console.log(input)
    }



    const handelSubmit=async()=>{
        
    
        let api="http://localhost:8000/admin/usercreate"; 

        try {
            const response=await  axios.post(api,input);
            console.log(response.data);
            alert("user succesfully  created!!!");

        } catch (error) {
            console.log(error)
        }
    }


    return(
        <>
        <center>
        <div style={{width:"400px",paddingTop:"40px"}}>
         <Form.Control type="text" placeholder="Enter Emmployee Name "name='username' onChange={handelChange} /> <br />
         <Form.Control type="text" placeholder="Enter Email " name='email' onChange={handelChange} /> <br />
         <Form.Control type="text" placeholder="Enter password " name='password' onChange={handelChange} /> <br />

         <select className="custom-select" name="designation" onChange={handelChange}>
         <option>Select Designation</option>
         <option>Developer</option>
         <option>Team Leader</option>
         <option>Tester</option>
         <option>Product Manager</option>
         <option>Trainee</option>
         </select> <br /><br />
         <Button variant="primary" onClick={handelSubmit}>Submit</Button>


         </div>
         </center>
        </>
    )
}
export default CreateUser;