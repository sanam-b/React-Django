import React, { useState } from "react"
import Login from "./Login";
const OptionsLogin = () => {
    const [selectedRole,setSelectedRole] = useState(null);
    const handleSelection=(role)=>{
        return setSelectedRole(role);
    }
    if(selectedRole){
        return <Login role={selectedRole} />;
    }
  return (
    <div>
      <div className='header'></div>
    <div className='container'>
        <button id='item' onClick={()=>handleSelection("Patient")}>Patient</button>
        <button id='item' onClick={()=>handleSelection("Doctor")}>Doctor</button>
    </div>
    <div className='footer'></div>
    </div>
  )
};

export default OptionsLogin;
