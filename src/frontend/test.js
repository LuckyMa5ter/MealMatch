import React, { useState } from 'react';
import './test.css';
import next from './next.png';
import lock from './lock.png'
//import Login from '../backend/login';
class Test extends React.Component {

  render() {
    return (
<div>
     <div className="header">
     <h1>title</h1>
     </div>
  
    <div className="methodselector">
    
    
   
    <div>
   <a className='login' id='a2' onClick={()=>document.getElementById("a2").style.backgroundColor='skyblue'}>Log In</a>
<a id='a'>Sign Up</a>
   </div>
</div>
<body>
<div className = "wrapBox">
<div classname="inputs">

  
    
   
<input placeholder='Username' id="un" size="10" maxlength="10" />
 <hr></hr>
<input type="password" placeholder='Password' id="pw" size="10" maxlength="10" />
<img src={next}
id='nexticon'
/>
<img src={lock}/>
</div>
</div>
</body>
</div>


    )
  }
}

export default Test;