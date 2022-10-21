import React,{useState,useEffect} from "react";
import './App.css';

function App() {


  const [haserror,seterrors]=useState(false);
  const[emplye,setemplye]=useState([]);


  async function fetchData() {
    const response=await fetch("http://localhost:3000/employees")
    response.json()
    .then(data=>setemplye(data))
    .catch(err=>seterrors(err));



  }

  useEffect(()=>{
    fetchData();
  })
  
  return (
    <div className="App">
    <h1>Json Data</h1>
            <tbody>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Employee Salary</th>
                    <th>Employee Age</th>
                </tr>
                {emplye.map((item,id) => (
                    <tr key={id}>
                        
                        <td>{item.id}</td>
                        <td>{item.Name}</td>
                        <td>{item.Salary}</td>
                        <td>{item.Age}</td>
                    </tr>
                ))}
            </tbody>
 
        
   
    
    </div>
  );
}

export default App;
