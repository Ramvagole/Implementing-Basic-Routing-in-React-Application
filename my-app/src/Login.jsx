import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Login(){
    let [a,setVal]=useState({})
    let nav=useNavigate()
    function goTo(){
        setVal({})
        nav("/user",{state:a})
    }
    return(
        <>
        <input type="text" value={a.user} name="user" placeholder="Enter usename" onChange={(e)=>setVal({...a,[e.target.name]:e.target.value})}/>
        <input type="text" value={a.password} name="password" placeholder="Enter password" onChange={(e)=>setVal({...a,[e.target.name]:e.target.value})}/>
        <button onClick={goTo}>Submit</button>
        </>
    )
}