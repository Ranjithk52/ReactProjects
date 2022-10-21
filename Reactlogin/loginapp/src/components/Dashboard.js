import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';







function Dashboard() {
  const employee = [
    {
      "id": 101,
      "name": 'Ramesh',
      "Salary": 10000,
      "Age": 30
    },
    {
      "id": 102,
      "name": 'Rajesh',
      "Salary": 20000,
      "Age": 32
    },
    {
      "id": 103,
      "name": 'Rakesh',
      "Salary": 25000,
      "Age": 35
    },
    {
      "id": 104,
      "name": 'Radhesh',
      "Salary": 35000,
      "Age": 28
    },
    {
      "id": 105,
      "name": 'Rajineesh',
      "Salary": 50000,
      "Age": 29
    }


  ];
  const [id, setid] = useState();
  const [name, setname] = useState();
  const [Salary, setSalary] = useState();
  const [Age, setAge] = useState();
  const [elist, setelist] = useState(employee);
  let newemployee = {
    "id": parseInt(id),
    "name": name,
    "Salary": parseInt(Salary),
    "Age": parseInt(Age)

  }
  const createemployee = (e) => {
    e.preventDefault();
    let size = elist.length;
    employee.id = size + 1;
    employee.push(newemployee);
    alert('Successfully new Employee details created...');
    setelist(employee);
    console.log(employee);
  }
  const deleteemployee = (id) => {
    const newlist = elist.filter(p => p.id != id);
    setelist(newlist);
    alert('successfully deleted employee details ' + id);
    Navigate('/dashboard');

  }
  const updateemployee = (e, id) => {
    console.log("product id " + id);
    e.preventDefault();
    elist.map(p => {
      if (p.id === id) {
        setid(p.id);
        setname(p.name);
        setSalary(p.Salary);
        setAge(p.Age)
      }
    })
    alert('calling update product....' + id);
  }
  const employeelist = employee.map(employe => {
    return (
      <tr key={employe.id}>
        <td>{employe.id}</td>
        <td>{employe.name}</td>
        <td>{employe.Salary}</td>
        <td>{employe.Age}</td>
        <td>
          <button className='btn btn-success' style={{ margin: '10px' }} onClick={(e) => updateemployee(e, employe.id)}>Edit</button>
          <button className='btn btn-danger' onClick={() => deleteemployee(employe.id)}>Delete</button>
        </td>

      </tr>

    )
  })






  return (
    <div className='container'>
      <h1>Create Employee Details</h1><hr />
      <form>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeId" className="form-label">Enter Employee Id</label>
          <input type="text" className="form-control" id="exampleInputEmployeeId" value={id} onChange={(e) => setid(e.target.value)} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeName" className="form-label">Enter Employee Name</label>
          <input type="text" className="form-control" id="exampleInputEmployeeName" value={name} onChange={(e) => setname(e.target.value)} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeSalary" className="form-label">Enter Employee Salary</label>
          <input type="text" className="form-control" id="exampleInputEmployeeSalary" value={Salary} onChange={(e) => { setSalary(e.target.value) }} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeAge" className="form-label">Enter Employee Age</label>
          <input type="text" className="form-control" id="exampleInputEmployeeAge" value={Age} onChange={(e) => { setAge(e.target.value) }} />
        </div><br/>
        <button type="submit" className="btn btn-primary" style={{marginRight:'968px'}}>Create</button>
      </form>
      <h1>Employee List</h1><hr />
      <table className='table'>
        <thead>
          <tr>
            <th scope="col">Employee Id</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Employee Salary</th>
            <th scope="price">Employee Age</th>
            <th colSpan={'2'}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeelist}
        </tbody>
      </table>
      <h1>....................................</h1><hr />
      <form style={{margin:'-932px 10px 10px 439px'}}>
        <div className="form-group col-md-4">
          <label htmlFor="exampleInputEmployeeId" className="form-label">Enter Employee Id</label>
          <input type="text" className="form-control" id="exampleInputEmployeeId" value={id} onChange={(e) => setid(e.target.value)} />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="exampleInputEmployeeName" className="form-label">Enter Employee Name</label>
          <input type="text" className="form-control" id="exampleInputEmployeeName" value={name} onChange={(e) => setname(e.target.value)} />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="exampleInputEmployeeSalary" className="form-label">Enter Employee Salary</label>
          <input type="text" className="form-control" id="exampleInputEmployeeSalary" value={Salary} onChange={(e) => { setSalary(e.target.value) }} />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="exampleInputEmployeeAge" className="form-label">Enter Employee Age</label>
          <input type="text" className="form-control" id="exampleInputEmployeeAge" value={Age} onChange={(e) => { setAge(e.target.value) }} />
        </div><br/>
        <button type="submit" className="btn btn-primary" onClick={updateemployee} style={{marginRight:'968px'}}>Update</button>
      </form>
    </div>
  )
}

export default Dashboard
