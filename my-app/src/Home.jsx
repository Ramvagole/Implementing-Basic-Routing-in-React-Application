import { useActionData, useNavigate } from "react-router-dom"

export function Home(){
    let nav=useNavigate()
    function goTo(){
        nav("/login")
    }
    return(
        <>
            <h1>Home</h1>
            <button onClick={goTo}>Go to Login</button>
        </>
    )
}