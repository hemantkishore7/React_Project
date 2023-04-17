import { Button, Form } from "react-bootstrap";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import StudentData from "./StudentData";
import StudentTable from "./StudentTable";

export default function Edit(props){ 
    const history = useNavigate()
  const {data,students,setStudents} =props
  const [updateState, SetUpdateState] = useState();
  const [value,setValue] = useState({
    
    name: '',
    age : '',
    email : '',
    course : '',
    batch: ''
  } 
  )


    function handleInput(e){ 
      const update = students.map((d)=>(
     d.id===data.id ?{...d,[e.target.name]:e.target.value} : d
      ))
      setStudents(update)
      history('/table')
    }

    function handleUpdate(e){
     e.preventDefault()
     
     
    }
    return(
      <div className="update-table" style={{ margin: "1rem" }}>
      <Form className="d-grid" style={{margin:'1rem'}}>
           <Form.Group className="mb-3" controlId="formName">
            <Form.Control type="text" name="name" value={data.name} required onChange={handleInput}>
            </Form.Control>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formAge">
            <Form.Control type="number"  name="age" value={data.age}  onChange={handleInput}>
            </Form.Control>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formMail">
            <Form.Control type="text"  name="email" value={data.email}  required onChange={handleInput}>
            </Form.Control>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formCourse">
            <Form.Control type="text"  name="course" value={data.course}  required onChange={handleInput}>
            </Form.Control>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBatch">
            <Form.Control type="text"  name="batch" value={data.batch}  required onChange={handleInput}>
            </Form.Control>
           </Form.Group>
           <Button onClick={handleUpdate} type='submit' className="btn btn-warning">UPDATE</Button>
          
        </Form>
      </div>
    )

  }