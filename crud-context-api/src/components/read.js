import React,{useContext} from "react";
import { DataContext } from "./contextData";
import {Link} from 'react-router-dom'
 export default function Read()
 {
    const { data } = useContext(DataContext);
    console.log(data)
  return (
    <div className="create">
      <h2>Read Data</h2>
      <div className="card">
      <table  className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, age,role }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{role}</td>
              <td>
                <Link to="/update">
                <button className="btn btn-success">
                  Update
                </button>
                </Link>
                
                <Link to={"/delete"}>
                <button className="btn btn-danger">
                  Delete
                </button>
                </Link>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
     
    </div>
  );
 }