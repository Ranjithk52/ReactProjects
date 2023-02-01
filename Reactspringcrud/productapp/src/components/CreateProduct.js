import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import ProductService from '../Services/ProductService';

function CreateProduct() {
    const[id,setid]=useState();
    const[name,setname]=useState();
    const[qnty,setqnty]=useState();
    const[price,setprice]=useState();
    const navigate=useNavigate();

    const createemploye=(e)=>{
        e.preventDefault()
        let prod={
            "pid":parseInt(id),
            "pname":name,
            "qty":parseInt(qnty),
            "price":parseInt(price)

        }
        ProductService.createProducts(prod).then((res)=>{
          

        })
        
      alert("Successfully inserted.....")
       // console.log(prod);
    }



  return (
    <div>
        <form>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeId" className="form-label">Enter Product Id</label>
          <input type="text" className="form-control" id="exampleInputEmployeeId" value={id} onChange={(e) => setid(e.target.value)} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeName" className="form-label">Enter Product Name</label>
          <input type="text" className="form-control" id="exampleInputEmployeeName" value={name} onChange={(e) => setname(e.target.value)} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeSalary" className="form-label">Enter Product Quantity</label>
          <input type="text" className="form-control" id="exampleInputEmployeeSalary" value={qnty} onChange={(e) => { setqnty(e.target.value) }} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeAge" className="form-label">Enter Product price</label>
          <input type="text" className="form-control" id="exampleInputEmployeeAge" value={price} onChange={(e) => { setprice(e.target.value) }} />
        </div><br/>
        <button type="submit" className="btn btn-primary"  style={{marginRight:'1200px'}} onClick={createemploye}>Create</button>
      </form>
      
    </div>
  )
}

export default CreateProduct
