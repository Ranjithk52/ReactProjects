import React, { useState } from 'react'

function Create() {
    const [id, setid] = useState();
    const [Name, setName] = useState();
    const [Salary, setSalary] = useState();
    const [Age, setAge] = useState();

    return (
        <div className='container'>
            <form>
            <div class="col-md-3">
                    <label for="inputZip" class="form-label">Employee ID</label>
                    <input type="text" class="form-control" id="inputZip" onChange={(e)=>setid(e.target.value)}/>
                </div>
                <div class="col-md-3">
                    <label for="inputEmail4" class="form-label">Employee Name</label>
                    <input type="text" class="form-control" id="inputEmail4" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div class="col-md-3">
                    <label for="inputPassword4" class="form-label">Employee Salary</label>
                    <input type="text" class="form-control" id="inputPassword4" onChange={(e)=>setSalary(e.target.value)}/>
                </div>
                <div class="col-3">
                    <label for="inputAddress" class="form-label">Employee Age</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Employee Age" onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <br/>
                <div class="col-3">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default Create
