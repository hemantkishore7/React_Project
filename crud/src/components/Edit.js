import React, { useState, useEffect } from "react";
import Players from "./Players";
import {Form,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useNavigate} from 'react-router-dom';

function Edit(){
    const [id,setId] = useState('');
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [role,setRole] = useState('');

    const history = useNavigate();

    

      function handleUpdate(e){
        e.preventDefault()

        let index = Players.map(function(e) {
          return e.Id;
        }).indexOf(id);
        
        let a = Players[index]
        
        a.Name = name;
        a.Age = age;
        a.Role = role;
        
        history('/')
      }

      useEffect(()=>{
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setRole(localStorage.getItem('Role'))

      },[])

    return(
    <div>
        <Form className="d-grid gap-2" style={{margin:'15rem'}}>
           <Form.Group className="mb-3" controlId="formName">
            <Form.Control type="text" placeholder="Player Name" value={name} required onChange={(e)=>setName(e.target.value)}>
            </Form.Control>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formAge">
            <Form.Control type="text" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)}>
            </Form.Control>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formRole">
            <Form.Control type="text" placeholder="Role" value={role} required onChange={(e)=>setRole(e.target.value)}>
            </Form.Control>
           </Form.Group>
           <Button onClick={(e)=> handleUpdate(e)} type='submit'>UPDATE</Button>
        </Form>
    </div>
    )
}

export default Edit;
