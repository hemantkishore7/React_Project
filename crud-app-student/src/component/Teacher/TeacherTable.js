import React, { useState } from "react";

import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {TeacherData} from "./TeacherData";
import Update from './UpdateTeacher'

export default function TeacherTable() {
  const [teacher,setTeacher] = useState(TeacherData)
  const[updateState,SetUpdateState] = useState(-1)

  const history = useNavigate()

  function handleRemove(name) {
    
   let index = teacher.map((e)=>{
    return e.name
   }).indexOf(name)
   teacher.splice(index,1)
     history('/teacher')
  }

  function handleEdit(name) {
    SetUpdateState(name);
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
            {teacher.map((data, index) => 
                 updateState !== data.name ? (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.skill}</td>
                      <td>{data.batch}</td>
                      <td>
                      <Button className="btn btn-light" onClick={handleEdit(data.name)}>EDIT</Button>
                        <Button className="btn btn-dark" onClick={()=>handleRemove(data.name)}>Remove</Button>
                      </td>
                    </tr>
                  ) : (<Update data={data} teacher={teacher} setTeacher={setTeacher}/>
            )
             )}
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
