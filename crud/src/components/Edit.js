import React, { useState, useEffect } from "react";
import Players from "./Players";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useNavigate } from "react-router-dom";

function Edit() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");
  const [playerData, setPlayerData] = useState(Players)

  const history = useNavigate();

  function handleUpdate(e) {
    e.preventDefault();

    // let index = Players.map((e) => {
    //   return e.Id;
    // });

    // console.log(index);
    // let copyData = [...Players];
    // let a = copyData[index];

    // a.Name = name
    // a.Age = age
    // a.Role = role

    // setName(a.Name);

    // let x =  Players.find((p)=> p.Id === id)

   const editData = playerData.map((data,_index)=> {
    if (data.Id === id){
      data.Name = name;
      data.Age = age;
      data.Role = role;
      
    } 
    // Players.push(editData)
   })
    setPlayerData(editData)
  
    history("/");
  }

  useEffect(() => {
    setId(localStorage.getItem("Id"));
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setRole(localStorage.getItem("Role"));
  }, []);

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Player Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formRole">
          <Form.Control
            type="text"
            placeholder="Role"
            value={role}
            required
            onChange={(e) => setRole(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleUpdate(e)} type="submit">
          UPDATE
        </Button>
      </Form>
    </div>
  );
}

export default Edit;
