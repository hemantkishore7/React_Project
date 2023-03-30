import { useState } from "react";
import {Card , Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function TodoComponent(){
   
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');

    function handleTodo(){
        let todoCopy = [...todos];
        todoCopy.push(todo)
        //console.log(todoCopy);
        setTodos(todoCopy)
    }
    return(
   <div className="container">
   <div className="form-header">
    <input type='text' id="input" placeholder="Enter Task" onChange={(e)=>setTodo(e.target.value)}/>
    <Button onClick={handleTodo}>Add To-Do</Button>
    </div>
    <div className="form-body">
     <ul>
        {
            todos.map((e,i)=>
                <li key={i}>{e}</li>
            )
        }
     </ul>
    </div>
   </div>
    )
}

export default TodoComponent;