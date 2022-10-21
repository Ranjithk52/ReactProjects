import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Change() {
    const [oldpword, setoldpword] = useState();
    const [newpword, setnewpword] = useState();
    const Navigate = useNavigate();
    
    var obj1 = localStorage.getItem('Pass');

    console.log(obj1);
    
    const check = (e) => {
        e.preventDefault();
        if (obj1=== oldpword) {
           localStorage.setItem('Pass',newpword)

            Navigate("/login");
        } else {

            alert(localStorage.getItem('Pass',newpword))
        }
    }


    return (
        <div>
            <label >Old Password</label>
            <input type="text" name="oldpword" value={oldpword} onChange={(e => setoldpword(e.target.value))} /><br></br><br></br>
            <label >New Password</label>
            <input type="text" name="newpword" value={newpword} onChange={(e => setnewpword(e.target.value))} /><br></br><br></br>
            <button className='btn btn-primary' onClick={check} >Update</button>

        </div>
    )
}

export default Change
