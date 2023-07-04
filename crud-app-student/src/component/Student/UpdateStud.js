import { Button, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentData from './StudentData'
import axios from "axios";


export default function Edit() {
  const navigate = useNavigate();
  
  const [student, SetStudent] = useState(StudentData);
  const [id,setId] = useState();
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  
  const [course, setCourse] = useState('');
  const [batch, setBatch] = useState('');
  
   useEffect(()=>{
    setId(localStorage.getItem('id'))
    setName(localStorage.getItem('name'))
    setAge(localStorage.getItem('age'))
    
    setCourse(localStorage.getItem('course'))
    setBatch(localStorage.getItem('batch'))
   },[])
 
  //  function reload(){
  //   history('/table')
  //  }

  function handleUpdate(e) {
   e.preventDefault()

    axios.put(`https://64477bb750c253374425ea00.mockapi.io/crud/user/${id}`,{
      name,
      age,
      course,
      batch
    })
   
    alert('Updated Successfully!..')
    reloadPage()
  }

  const reloadPage = () =>{
    window.location.reload()
  }

  return (
    <div className="update-table" style={{ margin: "1rem" }}>
      <Form className="d-gird" style={{ margin: "1rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            name="name"
            value={name}
            required
            onChange={(e)=>setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="number"
            name="age"
            value={age}
            onChange={(e)=>setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
       
        
        <Form.Group className="mb-3" controlId="formCourse">
          <Form.Control
            type="text"
            name="course"
            value={course}
            required
            onChange={(e)=>setCourse(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBatch">
          <Form.Control
            type="text"
            name="batch"
            value={batch}
            required
            onChange={(e)=>setBatch(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          onClick={(e)=>handleUpdate(e)}
          type="submit"
          className="btn btn-warning"
        >
          UPDATE
        </Button>
      </Form>
    </div>
  );
}
