
import './App.css';
import {connect} from 'react-redux';
import Home from './components/Home';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import Email from './components/Email';





function App(props) {
  // const increment=()=>{
  //   props.dispatch({
  //     type:"INCREMENT"
  //   });
  // }

  // const decrement=()=>{
  //   props.dispatch({
  //     type:'DECREMENT'
  //   });
  // }
  return (
    <div className="App mt-5">
     
      <BrowserRouter>
      <ul>
        <li>
            <Link to='/home' className='btn btn-primary' style={{margin:'10px'}}>Home</Link>
        </li>
        <li>
        <Link to='/email' className='btn btn-primary' style={{margin:'10px'}}>Email</Link>
        </li>
    </ul>
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/email' element={<Email/>}/>
        

      </Routes>
    </BrowserRouter>
    
{/* <center>
<button onClick={increment} className="btn btn-success mr-5">
Increment
</button><span style={{padding:5}}></span>
<button onClick={decrement} className="btn btn-danger">
Decrement
</button>
<h2 className="mt-5 display-1">{props.count}</h2>
<div class="col-md-3">
<label for="formGroupExampleInput" class="form-label">Email ID</label>
  <input type="text" class="form-control" id="formGroupExampleInput"></input>
  </div>
</center>
{/* <Home /> */}
</div>
);
}






// const mapStateToProps = state => { //to access state mapState through access any component
// return {
// count: state.count
// }; 
// };







export default App;