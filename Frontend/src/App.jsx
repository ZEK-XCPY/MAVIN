import React from 'react'
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import HomePage from './pages/HomePage.jsx'
import Register from './pages/Register'
import Login from './pages/Login.jsx'
import  { Toaster } from 'react-hot-toast';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";


const theme = createTheme();

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <NavBar/>
      <Toaster/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App