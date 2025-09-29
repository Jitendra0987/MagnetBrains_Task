import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "antd"; 

const UserReport = () => {
  const [myData, setMyData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const loadData = async () => {
    try {
      let api = "http://localhost:8000/admin/showreport";
      const response = await axios.get(api);
      setMyData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load data");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const ressignTask = async (taskid) => {
    try {
      let api = "http://localhost:8000/admin/taskreassign";
      const response = await axios.post(api, { taskid: taskid });
      alert(response.data.msg);
      loadData();
    } catch (error) {
      console.log(error);
      alert("Failed to reassign task");
    }
  };

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = myData.slice(indexOfFirst, indexOfLast);

  const ans = currentItems.map((key) => (
    <tr className="report" key={key._id}>
      <td>{key.empid.username}</td>
      <td>{key.empid.designation}</td>
      <td>{key.empid.email}</td>
      <td>{key.tasktitle}</td>
      <td>{key.taskDescription}</td>
      <td>{key.compdays}</td>
      <td>{key.taskstatus}</td>
      <td>
        {key.empreport === "submitted" ? (
          <span style={{ color: "green", fontWeight: "bold" }}>{key.empreports}</span>
        ) : (
          <span style={{ color: "red", fontWeight: "bold" }}>{key.empreports}</span>
        )}
      </td>
      <td>
        <button onClick={() => ressignTask(key._id)}>ReAssign</button>
      </td>
    </tr>
  ));

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee Designation</th>
            <th>Email</th>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Assign Days</th>
            <th>Task Status</th>
            <th>Report</th>
            <th>Actions</th> {/* Only ReAssign */}
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>

      <div style={{ marginTop: 20, display: "flex", justifyContent: "center" }}>
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={myData.length}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default UserReport;
