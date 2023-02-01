import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ProductService from '../Services/ProductService';

function UpdateProduct() {
    const navigate=useNavigate();
    const [id, setid] = useState();
  const [name, setname] = useState();
  const [qty, setqty] = useState();
  const [price, setprice] = useState();
  const params=useParams();
  
  useEffect(()=>{
    ProductService.getProductbyId(params.id).then(res =>{
       setid(res.data.pid);
       setname(res.data.pname);
       setqty(res.data.qty);
       setprice(res.data.price);
    });

  },[])
  const update=(e)=>{
    e.preventDefault();
    let prod={
        "pid":parseInt(id),
        "pname":name,
        "qty":parseInt(qty),
        "price":parseInt(price)
    }
    
    ProductService.updateProduct(prod).then(res =>{
        console.log(res.data)
    })
    navigate(`/list`);

  }
  return (
    <div>
     <form>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputProductId" className="form-label">Enter Product Id</label>
          <input type="text" className="form-control" id="exampleInputProductId" value={id}  />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeName" className="form-label">Enter Product Name</label>
          <input type="text" className="form-control" id="exampleInputEmployeeName" value={name} onChange={(e) => setname(e.target.value)} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeqty" className="form-label">Enter Product Quantity</label>
          <input type="text" className="form-control" id="exampleInputEmployeeqty" value={qty} onChange={(e) => { setqty(e.target.value) }} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeAge" className="form-label">Enter Product Price</label>
          <input type="text" className="form-control" id="exampleInputEmployeeAge" value={price} onChange={(e) => { setprice(e.target.value) }} />
        </div><br/>
        <button type="submit" className="btn btn-primary"  style={{marginRight:'1200px'}} onClick={(e)=>update(e)}>Update</button>
        {id}{name}{qty}{price}
      </form>
    </div>
  )
}

export default UpdateProduct
