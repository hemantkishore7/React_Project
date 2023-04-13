import React, {useState} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {TeacherData} from './TeacherData'

export default function CreateTeacher() {

  const history = useNavigate();

  const [name, setName] = useState('');
  const [skill, setSkill] = useState('');

  const [batch, setBatch] = useState('');

  function handleAdd(e){
      e.preventDefault()
     
      let a= name;
      let b= skill;
      let c= batch;
     
      TeacherData.push({name : a, skill:b, batch:c})

      history('/teacher')
  }

  return (
    <div>
          
          <Form className="d-grid gap-2" style={{margin:'2rem'}}>
           <Form.Group className="mb-3" controlId="formName">
            <Form.Control type="text" placeholder="Mentor Name" required onChange={(e)=>setName(e.target.value)}>
            </Form.Control>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formSkill">
            <Form.Control type="text" placeholder="Skill" onChange={(e)=>setSkill(e.target.value)}>
            </Form.Control>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBatch">
            <Form.Control type="text" placeholder="Batch ID" required onChange={(e)=>setBatch(e.target.value)}>
            </Form.Control>
           </Form.Group>
           <Button onClick={(e)=>handleAdd(e)} type='submit'>SUBMIT</Button>
         
        </Form>
    </div>
  )
}
