import axios from "axios";

const baseurl="http://localhost:5505/crud/product"
const baseurl1="http://localhost:5505/crud/product/create"
const baseurl2="http://localhost:5505/crud/product/update"
const baseurl3="http://localhost:5505/crud/user1/user"
const baseurl4="http://localhost:5505/crud/user1/signin"

class ProductService{
    createProducts(prod){
        return axios.post(baseurl1,prod)
    }
    getAllProducts(){

        return axios.get(`${baseurl}/all`)
    }
    getProductbyId(id){
        return axios.get(`${baseurl}/viewbyid/${id}`)
    }
    updateProduct(prod){
        return axios.put(baseurl2,prod)
    }
    deleteProduct(id){
        return axios.delete(`${baseurl}/delete/${id}`)
    }
    createuser(userdata){
        return axios.post(baseurl3,userdata)
    }
    siginuser(uname,pword){
        return axios.get(`${baseurl4}/${uname}/${pword}`)
    }

}
export default new ProductService();