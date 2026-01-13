import React from 'react'
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/Navbar/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import Register from './pages/Register'
import Login from './pages/Login.jsx'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App