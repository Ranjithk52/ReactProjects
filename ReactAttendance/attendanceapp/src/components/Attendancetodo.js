import React, { useState } from 'react'

function Attendancetodo() {
const[date,setdate]=useState();
const[name,setname]=useState();
const[project,setproject]=useState();
const[hours,sethours]=useState();
const[desc,setdesc]=useState();
const[employee,setemployee]=useState();
const handclick=()=>{
let obj={
  "date":{date},
  "name":{name},
  "project":{project},
  "hours":{hours},
  "desc":{desc}

}
setemployee(obj);

}



  return (
    <div>
      <section className="vh-1000" style={{backgroundColor: "#eee"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7">
        <div className="card" style={{width: "60rem"}}>
          <div className="card-body p-12">

            <h4 className="text-center my-3 pb-3">Attendance Tracker System</h4>

            <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-4">
              <div className="col-12">
                <div className="form-outline">
                  <input type="text" id="form1" className="form-control" value={date} onChange={(e)=>setdate(e.targetvalue)}/>
                  <label className="form-label" htmlFor="form1">Date</label>
                  <input type="text" id="form1" className="form-control" value={name} onChange={(e)=>setname(e.targetvalue)}/>
                  <label className="form-label" htmlFor="form1">Name</label>
                  <input type="text" id="form1" className="form-control" value={project} onChange={(e)=>setproject(e.targetvalue)}/>
                  <label className="form-label" htmlFor="form1">Project</label>
                  <input type="text" id="form1" className="form-control" value={hours} onChange={(e)=>sethours(e.targetvalue)}/>
                  <label className="form-label" htmlFor="form1">No of Hours</label>
                  <input type="text" id="form1" className="form-control" value={desc} onChange={(e)=>setdesc(e.targetvalue)}/>
                  <label className="form-label" htmlFor="form1">Description</label>
                 
                </div>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary" onClick={handclick}>Save</button>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-warning">Get tasks</button>
              </div>
            </form>

            <table className="table mb-4">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Name</th>
                  <th scope="col">Project</th>
                  <th scope="col">No of Hours</th>
                  <th scope="col">Description</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
              {/* {employee.map((emplye) => {
                        return (
                            <tr key={emplye.date}>
                                <td>{emplye.date}</td>
                                <td>{emplye.name}</td>
                                <td>{emplye.project}</td>
                                <td>{emplye.hours}</td>
                                <td>{emplye.desc}</td>
                                <td> */}
                <tr>
                  <th scope="row">{date}</th>
                  <td>{name}</td>
                  <td>In progress</td>
                  <td></td>
                  <td></td>
                  
                  <td>
                    <button type="submit" className="btn btn-danger">Delete</button>
                    <button type="submit" className="btn btn-success ms-1">Finished</button>
                  </td>
                </tr>
                    {/* );
                  })}       */}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Attendancetodo
