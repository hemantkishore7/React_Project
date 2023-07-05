import React,{useContext,useState} from "react";
import { DataContext } from "./contextData";
import { Link } from "react-router-dom";
 export default function Update()
 {
    const {  updateData } = useContext(DataContext);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
const [role,setRole]=useState("")
  const handleUpdateData = () => {
    const updatedData = { id: Number(id), name, age,role };
    updateData(Number(id), updatedData);
    setId("");
    setName("");
    setAge("");
    setRole("")
  };

  return (
    <div className="create">
      <h2>Update Data</h2>
      <div className="card">
      <label htmlFor="id">Enter ID:</label>
      <input
        type="text"
        id="id"
        value={id}
        placeholder="ID"
        onChange={(e) => setId(e.target.value)}
      />
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
      <button  className="btn btn-primary" onClick={handleUpdateData}>Update Data</button>
      </Link>
     
      </div>
      
    </div>
  );
 }