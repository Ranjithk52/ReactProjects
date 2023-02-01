import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductService from '../Services/ProductService';

function Dashboard() {
    const navigate=useNavigate();
    
    const [product, setproduct] = useState([]);
    useEffect(() => {
        getAllProduct();
    }, []);
    const getAllProduct = async () => {
        const prddata = await ProductService.getAllProducts();
       
        setproduct(prddata.data);
       

    }
    // const deleteproducts=(pid)=>{
     
    //     alert("deletedddd")
    //     ProductService.deleteProduct(pid).then(()=>{

    //         getAllProduct();
    //     })
    // }
   
    // 
    const addtocart=(pid)=>{

    }
    const buyproduct=(pid)=>{

    }
    const viewproduct=(id)=>{
        navigate(`/view/${id}`)
    }
   

    return (

        <div className="container">
            <h1>Product List</h1>
            <hr />
            {/* <a className="btn btn-primary" style={{ float: "left" }}>+Employee</a> */}
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th colSpan={"3"}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((prdct) => {
                        return (
                            <tr key={prdct.pid}>
                                <td>{prdct.pid}</td>
                                <td>{prdct.pname}</td>
                                <td>{prdct.qty}</td>
                                <td>{prdct.price}</td>
                                <td>
                                    <a className="btn btn-primary" style={{ margin: "10px" }} onClick={()=>addtocart(prdct.pid)}>ADD to CART</a>
                                    <button className="btn btn-info" onClick={(e)=>buyproduct(prdct.pid)}>BUY</button>
                                    <button className="btn btn-success" style={{ margin: "10px" }} onClick={()=>viewproduct(prdct.pid)}>View</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard
