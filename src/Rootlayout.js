import React from 'react'
import NavbarDemo from './components/Nav2/NavbarDemo'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
      <div className='content-container'>
        <NavbarDemo/>
        </div>
        <div style={{minHeight:"65vh"}} className='container'>
        <Outlet/>
        </div>
    </div>
  )
}

export default RootLayout