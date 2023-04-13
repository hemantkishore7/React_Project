import React from "react";

import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {TeacherData} from "./TeacherData";

export default function TeacherTable() {

  const history = useNavigate()

  function handleRemove(name) {
    
   let index = TeacherData.map((e)=>{
    return e.name
   }).indexOf(name)
   TeacherData.splice(index,1)
     history('/teacher')
  }
  return (
    <>
    <div className="teacher-table">
      <div className="teacher-table-list" style={{ margin: "2rem" }}>
        <Table table stripped hover size="lg">
          <thead className="table-dark">
            <tr>
              <th scope="col">Mentor Name</th>
              <th scope="col">Skill</th>
              <th scope="col">Batch</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {TeacherData.length > 0
              ? TeacherData.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.skill}</td>
                      <td>{data.batch}</td>
                      <td>
                        <Button className="btn btn-dark" onClick={()=>handleRemove(data.name)}>Remove</Button>
                      </td>
                    </tr>
                  );
                })
              : "No Records Found!"}
          </tbody>
        </Table>
        <div className="teacher-table-button">
          <Link to="mentor">
            <button className="btn btn-outline-success">Create</button>
          </Link>
        </div>
      </div>
      
      </div>
      <Outlet/>
    </>
  );
}
