import axios from 'axios'
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import React, { Component } from 'react'

export default class ListComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
        }
    }
    componentDidMount(){
        axios.get("http://localhost:3000/employees").then(res=>
        {
            this.setState({data:res.data});
        });
        $(document).ready(function () {
            setTimeout(function(){
            $('#example').DataTable();
            } ,1000);
            });
            }
    
    render() {
    return (
        <div className="MainDiv">
        <div class="jumbotron text-center">
        <h3>LaraTutorials.com</h3>
        </div>
        
        
        
        <div className="container">
        
        
        
        <table id="example" class="table table-hover table-bordered">
        <thead>
        <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Email</th>
        </tr>
        </thead>
        <tbody>
        {this.state.data.map((result) => {
        return (
        
        
        
        <tr>
        <td>{result.id}</td>
        <td>{result.employename}</td>
        <td>{result.employe_email}</td>
       
        </tr>
        
        
        
        )
        })}
        
        
        
        
        </tbody>
        </table>
        
        
        
        </div>
        </div>
    )
  }
}
