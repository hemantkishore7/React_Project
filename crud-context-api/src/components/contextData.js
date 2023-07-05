import React,{createContext,useState} from "react";
export const DataContext=createContext();
export default function DataProvider({children})
{
    const [data, setData] = useState([]);

  const addData = (newData) => {
    setData([...data, newData]);
  };

  const updateData = (id, updatedData) => {
    setData(data.map((item) => (item.id === id ? updatedData : item)));
  };

  const deleteData = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
    const contextValue={data,addData,updateData,deleteData}
    return(
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    )
}