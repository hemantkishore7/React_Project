import React,{useContext,useState} from "react";
import { DataContext } from "./contextData";
import { Link } from "react-router-dom";
 export default function Create()
 {
    const { data,addData } = useContext(DataContext);
  const [name, setName] = useState("");
  const [role,setRole]=useState("")
  const [age, setAge] = useState("");

  const handleAddData = () => {
    const newData = { id: data.length + 1, name, age,role};
    addData(newData);
    setName("");
    setAge("");
    setRole("");
  };

  return (
    <div className="create">
        <h2>Create Data</h2>
        <div className="card">
        
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Role:Teacher or Student"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <Link to={"/read"}>
      <button className="btn btn-primary" onClick={handleAddData}>Add Data</button>
      </Link>
      
        </div>
      
    </div>
  );
 }