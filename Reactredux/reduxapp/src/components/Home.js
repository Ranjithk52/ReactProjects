import React, { useState } from 'react'
import {connect} from 'react-redux';

function Home(props) {
    const [mail,setemail]=useState();

    

    const increment=()=>{
      props.dispatch({
        type:"INCREMENT"
      });
    }
  
    const decrement=()=>{
      props.dispatch({
        type:'DECREMENT'
      });
    }
    // const emailupdate=()=>{
    //     props.dispatch({
            
    //     })
    // }
  return (
    <div>
      <center>
<button onClick={increment} className="btn btn-success mr-5">
Increment
</button><span style={{padding:5}}></span>
<button onClick={decrement} className="btn btn-danger">
Decrement
</button>
<h2 className="mt-5 display-1">{props.count}</h2>
<div class="col-md-3">
<label for="formGroupExampleInput" class="form-label">Email ID</label>
  <input type="text" class="form-control" id="formGroupExampleInput" onChange={(e)=>setemail(e.target.value)}></input>
  </div>
</center>
{/* <Home /> */}
</div>
);
}






const mapStateToProps = state => { //to access state mapState through access any component
return {
count: state.count
};
};







export default connect(mapStateToProps)(Home);
   


