import React from 'react'
import {Box,Link,Typography} from '@mui/material'
import {NavLink} from 'react-router-dom'
const NavBar = () => {
  return (
      <>
      <div className='bg-black text-gray-200 flex justify-between p-4 items-cemter h-14'>
        <h1 className='text-3xl'>Mavin</h1>
      <button className='bg-white justify-space-around text-black rounded-md p-4 m-2'> 
      <NavLink to="/register" p={1}>Sign Up </NavLink>
      <NavLink to="/login" p={1}>Sign In </NavLink>
      </button> 
      </div>
    </>
  )
}

export default NavBar
