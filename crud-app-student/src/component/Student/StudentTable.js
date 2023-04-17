import React, { useEffect } from "react";
import { StudentData } from "./StudentData";
import { Button, Table } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import add from "./AddStudent";
import { useState } from "react";
import Edit from "./UpdateStud";

export default function StudentTable(props) {
  const {handleUpdate} = props
  const history = useNavigate();
  const [updateState, SetUpdateState] = useState();
  const [details, setDetails] = useState();
  const [students, setStudents] = useState(StudentData);

  function handleRemove(id) {
    // let studentCopy = [...StudentDetail];
    // studentCopy = studentCopy.filter((student)=> student.name !== name)
    //  StudentDetail.push(studentCopy);
    let index = students.map((e) => {
      return e.id;
    }).indexOf(id);
    console.log(index);
    students.splice(index, 1);
    history("/table");
  }

  function handleEdit(id) {
    SetUpdateState(id);
  }
  
 
  // function handleUpdate(e){
  //   e.preventDefault()
  //   SetUpdateState(-1)

  //  }

  return (
    <>
      <div className="student-table">
        <div className="student-table-list" style={{ margin: "1rem" }}>
          <Table table stripped hover size="lg">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Student Name</th>
                <th scope="col">Age</th>
                <th scope="col">E-Mail</th>
                <th scope="col">Course</th>
                <th scope="col">Batch</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((data, index) =>
                updateState !== data.id ? (
                  <tr key={index}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.email}</td>
                    <td>{data.course}</td>
                    <td>{data.batch}</td>
                    <td>
                      <Button
                        className="btn btn-light"
                        onClick={() => handleEdit(data.id)}
                      >
                        EDIT
                      </Button>
                      <Button
                        className="btn btn-dark"
                        onClick={() => handleRemove(data.id)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ) : (
                  <Edit data={data} students={students} setStudents={setStudents}/>
                )
              )}
            </tbody>
          </Table>
          <div className="student-table-button">
            <Link to="add">
              <button className="btn btn-outline-success">Add Student</button>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
