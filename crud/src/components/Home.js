import Players from "./Players";
import React from 'react'
import {Button, Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Home(){

    const handleDelete =(id)=>{
        
    }
   return(
    <div className="container-fluid">
     <fragment>
        <div style={{margin:'10rem'}}>
            <Table striped bordered hover size="sm">
             <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Role</th>
                </tr>
             </thead>
             <tbody>
                {
                    Players && Players.length > 0 ? 
                    Players.map((e) =>{
                        return(
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.role}</td>

                                <td>
                                    <Button onClick={()=> alert(e.id)}>EDIT</Button>
                                    &nbsp;
                                    <Button onClick={()=> handleDelete(e.id)} >DELETE</Button>
                                </td>
                            </tr>
                            
                        )
                    })
                    : 'No Records!'
                }
             </tbody>
            </Table>
        </div>
     </fragment>
    </div>
   )
}

export default Home;