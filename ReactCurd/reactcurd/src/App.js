
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const[employee,setemployee]=useState([]);

async function fetchdata(){
const resp=await fetch("http://localhost:3000/employees")
resp.json()
.then(data=>setemployee(data));
}
useEffect(()=>{
  fetchdata();
})

  return (
    <div className="App">
      <h1>JSON DATA</h1>
      <tbody>
        <tr>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Employee Salary</th>
          <th>Employee Age</th>
        </tr>
        {employee.map((item,id)=>(
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
