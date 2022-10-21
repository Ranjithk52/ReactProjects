import React, { useState } from 'react'

function Channel() {
    let[no,setno]=useState(0)
    const[msg,setmsg]=useState("Welcome to my Channel")
    let [button,setbutton]=useState("Subscribe")

    // function disp(){
    //     setmsg("Welcome to my Channel")
      
    //     //setbutton("Subscribe")
    // }
    function click(){
        //alert("helo")
        setmsg("Thanks for Subscribing")
        console.log(setmsg);
        setbutton("UnSubscribe")
        setno(no=1)
        if(no===1){
       
       
        setno(no=0)
        }
        if(no===0){
            setmsg("Welcome to my Channel")
            setbutton("Subscribe")
        }
        
        
    }
    

  return (
    <div>

      <h1>{msg}</h1>
      <button className='btn btn-danger' onClick={click}>{button}</button>
      <p>Subscribers</p>
        <p>{no}</p>
    </div>
  )
}

export default Channel
