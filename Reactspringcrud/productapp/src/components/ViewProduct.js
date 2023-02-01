import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ProductService from '../Services/ProductService';

function ViewProduct(){

 const params=useParams()
const [id, setid] = useState();
const [name, setname] = useState();
const [qnty, setqnty] = useState();
const [price, setprice] = useState();
const navigate=useNavigate()

useEffect(()=>{
    ProductService.getProductbyId(params.id).then(res=>{
        setid(res.data.pid);
   setname(res.data.pname);
   setqnty(res.data.qty);
   setprice(res.data.price);
   console.log(res.data);
    });
    
},[])
const back=()=>{
    navigate("/list")
}
return (
<div>
  <br></br>
            <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> View Product Details</h3>
                <div className = "card-body">
                    <div className = "row">
                        <label> Product  ID: {id}</label>
                   
                    </div>
                    <div className = "row">
                        <label> Product Name:{ name } </label>
                         
                    </div>
                    <div className = "row">
                        <label> Product Quantity: { qnty }</label>
                   
                    </div>
                    <div className = "row">
                        <label> Product Price: { price } </label>
                       
                    </div>
                </div>
                <button type="submit" className="btn btn-primary"  style={{marginRight:'700px'}} onClick={(e)=>back(e)}>Back</button>
            </div>

</div>
)
}

export default ViewProduct
