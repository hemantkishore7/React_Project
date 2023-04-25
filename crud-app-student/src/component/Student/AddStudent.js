import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, useNavigate } from "react-router-dom";
import axios from 'axios';


export default function AddStudent() {
  const history = useNavigate();
 
  //const [id , setId] = useState();
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");


  const handleSubmit =()=>{
    
    const newStudent = {
      name: name,
      age:age,
      course:course,
      batch:batch,
         
    };

      axios.post('https://64477bb750c253374425ea00.mockapi.io/crud/user',{
       ...newStudent
       })
       alert('Success')
       
 

  }

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   const ids = uuid();
  //   let uniqueId = ids.slice(0, 10);

  //   let a = name;
  //   let b = age;
  //   let c = mail;
  //   let d = course;
  //   let f = batch;

  //   StudentData.push({
  //     //id: uniqueId,
  //     id: uniqueId,
  //     name: a,
  //     age: b,
  //     email: c,
  //     course: d,
  //     batch: f,
  //   });

  //   history("/table");
  // }

  return (
    <>
      {/* <div class="modal" tabindex="-1">
        <h3>fwfq</h3>

      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
      
    </div> */}

      <Form className="d-grid" style={{ margin: "1rem" }}>
        <Form.Group className="mb-1" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Your Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-1" controlId="formAge">
          <Form.Control
            type="number"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
        
        
        <Form.Group className="mb-1" controlId="formCourse">
          <Form.Control
            type="text"
            placeholder="Course"
            required
            onChange={(e) => setCourse(e.target.value)}
          ></Form.Control>
        </Form.Group>
        
        
        <Form.Group className="mb-1" controlId="formBatch">
          <Form.Control
            type="text"
            placeholder="Batch ID"
            required
            onChange={(e) => setBatch(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={handleSubmit} type="submit">
          SUBMIT
        </Button>
      </Form>
    </>
  );
}
