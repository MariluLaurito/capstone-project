import React from 'react'
import '../Styles/Nav.css'

function Nav() {
  return (
    <>
    <nav className='main-navbar'>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order online">Order Onlin</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
    </>
  )
}

export default Nav

