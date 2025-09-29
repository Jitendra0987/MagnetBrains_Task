import axios from "axios";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




const AssignTask=()=>{
 const [mydata,setMydata]=useState([]);
 const [input, setInput]=useState({});
 const [empId, setEmpId]=useState("");
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);

 const handelshow=(empid)=>{
  setEmpId(empid)
  setShow(true)
  
}

      const handleInput=(e)=>{
           let name=e.target.name;
           let value=e.target.value;
           setInput(values=>({...values,[name]:value}));
           console.log(input)
      }


      const handleSubmit=async()=>{       
        try {

         let api ="http://localhost:8000/admin/assigntask";
         const response= await axios.post(api,{empid:empId, ...input});
         console.log(response.data)
          alert("Task assign")
         
        } catch (error) {
         console.log(error)
        }

 } 

        const loadData = async()=>{
           try {
            let api="http://localhost:8000/admin/dataDisplay";
            const  response =await  axios.get(api);
            setMydata(response.data)
            console.log(response.data)
           } catch (error) {
            console.log(error)
           }
        }
        
        
        useEffect(()=>{
                loadData();
        },[])


        


        const ans = mydata.map((key)=>{
            return(
                <>
           
            <tr>
                <td>{key.username}</td>
                <td>{key.email}</td>
                <td>{key.designation}</td>
                <td>
   
                <Button variant="success" onClick={()=>{handelshow(key._id)}}>Assign</Button>

                </td>
            </tr>
            
           
            
                </>
            )

        })


    return(
        <> 


<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Task Assign</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    Enter Task Title: 
    <input type="text" name="tasktitle" value={input.tasktitle } onChange={handleInput} />
    <br />
    Enter Description:
    <textarea rows="4" cols="50" name="taskDescription" value={input.taskDescription} onChange={handleInput} />
    <br />
    Enter Completion Days:
    <input type="number" name="compdays" value={input.compdays} onChange={handleInput} style={{width:"100px"}}/>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="success" onClick={handleSubmit}>Save!!!</Button>
  </Modal.Footer>
</Modal>
    <center>
        <table className="emptable">
          <thead >
            <tr>
                <th>username</th>
                <th>email</th>
                <th>designation</th>                                      
                <th></th>
            </tr>
            {ans}
            </thead>
        </table>
        </center>
        </>
    )
}
export default AssignTask;