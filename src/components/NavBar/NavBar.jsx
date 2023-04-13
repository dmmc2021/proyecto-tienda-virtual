import React from 'react'
import Logo from '../Logo/Logo'
import NavMenu from '../NavMenu/NavMenu'
import LogoUser from '../LogoUser/LogoUser'
import ShoppingCar from '../ShoppingCar/ShoppingCar'



const NavBar = () => {
  return (
   <div className="navbar">
    <Logo/>
    <NavMenu/>
    <LogoUser/>
    <ShoppingCar/>
   </div>
  )
}

export default NavBar