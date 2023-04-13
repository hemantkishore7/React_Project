import Players from "./Players";
import {React, useState }  from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react";

function Home() {
   
  const history = useNavigate();

  const handleDelete = (id) => {
    let index = Players.map(function (e) {
      return e.Id;
    }).indexOf(id);
    Players.splice(index, 1);

    history("/");
  };

  function handleEdit(id, name, age, role){
    //console.log(name,age,role);
    localStorage.setItem('Id',id)
    localStorage.setItem('Name',name);
    localStorage.setItem('Age',age);
    localStorage.setItem('Role',role);
  }

  return (
    <div className="container-fluid">
    <header className="header display-1 mt-2">Player Lists</header>
      <Fragment>
      
        <div style={{ margin: "10rem" }}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {Players && Players.length > 0
                ? Players.map((e) => {
                    return (
                      <tr>
                        <td>{e.Name}</td>
                        <td>{e.Age}</td>
                        <td>{e.Role}</td>

                        <td>
                        <Link to='/edit'>
                          <Button onClick={() => handleEdit(e.Id,e.Name,e.Age,e.Role)}>EDIT</Button>
                          </Link>   
                          &nbsp;
                          <Button onClick={() => handleDelete(e.Id)}>
                            DELETE
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                : "No Records!"}
            </tbody>
          </Table>
          
          <Link className="d-grid gap-2 " to='/create'>
            <Button size="lg">CREATE</Button>
          </Link>
        </div>
      </Fragment>
    </div>
   
  );
}

export default Home;
