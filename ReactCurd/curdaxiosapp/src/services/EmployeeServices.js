import axios from "axios";
const baseUrl=' http://localhost:3000/employees';
class EmployeeServices{
    getAllEmployees(){
        return axios.get(baseUrl);
    }
    getEmploye(id){

        return axios.get(`${baseUrl}/${id}`);
    }
    createEmployee(employe){
        return axios.post(baseUrl,employe);

    }
    deleteEmployee(id){
        return axios.delete(`${baseUrl}/${id}`);

    }
    updateEmployee(id,employe){
        return axios.put(`${baseUrl}/${id}`,employe);

    }

}
export default new EmployeeServices();