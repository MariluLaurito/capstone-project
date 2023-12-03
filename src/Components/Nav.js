import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Nav.css'




function Nav() {
  return (
    <>
    <nav className='main-navbar'>
      <ul>
        <Link to="/" exact>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/order online">Order Online</Link>
        <Link to="/login">Login</Link>
      </ul>
    
    </nav>
    </>
  )
}

export default Nav

