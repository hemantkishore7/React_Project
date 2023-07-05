import React,{useContext,useState} from "react";
import { DataContext } from "./contextData";
import { Link } from "react-router-dom";
 export default function Delete()
 {
    const {  deleteData } = useContext(DataContext);
  const [id, setId] = useState("");

  const handleDeleteData = () => {
    deleteData(Number(id));
    setId("");
  };

  return (
    <div className="create">
        <h2>Delete Data</h2>
        <div className="card">
        
      <label htmlFor="id">Enter ID:</label>
      <input
        type="text"
        id="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Link to={"/read"}>
      <button className="btn btn-danger" onClick={handleDeleteData}>Delete Data</button>
      </Link>
      
        </div>
      
    </div>
  );
 }