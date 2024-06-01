import { useLocation, useNavigate } from "react-router-dom";

export function Users(){
    let use=useLocation()
    console.log(use.state.user)
    let nav=useNavigate()
    function goTo(){
        nav("/")
    }

    return(
        <>
        <h1>User</h1>
        <h2>{use.state.user}</h2>
        <button onClick={goTo}>got to Home</button>
        </>
    )
}