import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'
import { Users } from './Users'
function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user" element={<Users/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
