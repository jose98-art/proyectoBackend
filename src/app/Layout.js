import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../componentes/Footer'
import NavBar from '../componentes/NavBar'
import SideBar from '../componentes/SideBar'

const Layout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <SideBar/>
        <Footer/>
    </div>
  )
}

export default Layout