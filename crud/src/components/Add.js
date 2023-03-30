import React, {useState} from "react";
import {Link, useNavigate } from "react-router-dom";
import Players from "./Players";
import {v4 as uuid} from 'uuid';
import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function Add(){
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [role,setRole] = useState('');

    const history = useNavigate();

    function handleSubmit(e){
        e.preventDefault()

        const ids = uuid();
        let uniqueId = ids.slice(0,11);

        let a = name;
        let b = age;
        let c = role;
        
        Players.push({id:uniqueId, Name : a, Age : b, Role : c})

        history('/');
    }

    return(
    <div>
        <Form className="d-grid gap-2" style={{margin:'15rem'}}>
           <Form.Group className="mb-3" controlId="formName">
            <Form.Control type="text" placeholder="Enter Player Name" required onChange={(e)=>setName(e.target.value)}>
            </Form.Control>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formAge">
            <Form.Control type="text" placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)}>
            </Form.Control>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formRole">
            <Form.Control type="text" placeholder="Enter Role" required onChange={(e)=>setRole(e.target.value)}>
            </Form.Control>
           </Form.Group>
           <Button onClick={(e)=>handleSubmit(e)} type='submit'>SUBMIT</Button>
        </Form>
    </div>
    )
}

export default Add;