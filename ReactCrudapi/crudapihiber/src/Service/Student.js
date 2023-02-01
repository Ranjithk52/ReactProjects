import axios from "axios";
const createurl="http://localhost:8080/curdapihibernate/rest/student/create"
const getallurl="http://localhost:8080/curdapihibernate/rest/student/allstudents"
const getstudeurl="http://localhost:8080/curdapihibernate/rest/student/getstudentbyid"
const updateurl="http://localhost:8080/curdapihibernate/rest/student/update"
const deleteurl="http://localhost:8080/curdapihibernate/rest/student/delete"
class Student{
getAllStudents(){

return axios.get(getallurl)
}
getStudent(id){
    return axios.get(`${getstudeurl}/${id}`)
}
createStudent(id,name,marks){
    return axios.post(`${createurl}/${id}/${name}/${marks}`)
}
updateStudent(sid,name,marks){
    return axios.put(`${updateurl}/${sid}/${name}/${marks}`)
}
deleteStudent(id){
    return axios.delete(`${deleteurl}/${id}`)
}

}
export default new Student();
