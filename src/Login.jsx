import React, { useState } from "react"
import SignUp from "./SignUp";

export default function Login({role}){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
   // const[role,setRole]=useState("Patient")
    const[signUp,setSignUp]=useState(false);
    const handleSubmit = async(e)=>{
       
    }
    
      if(signUp)
        return <SignUp toggleLogin={()=>setSignUp(false)} role={role}/>
    
  return (
  <>
    <form>
        <h2 onSubmit={handleSubmit}>{role} Login</h2>
        <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" value={password} placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Submit</button>   
    </form>
    <p>Not registered yet?</p>
  
    <p style={{cursor: "pointer"}} onClick={()=>{setSignUp(true)}} >Sign Up!</p>
    
  </>
    
  )
};


