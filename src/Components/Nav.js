import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import '../Styles/Nav.css'
import About from './About';
import Highlights from './Highlights';


function Nav() {
  return (
    <>
    <nav className='main-navbar'>
      <ul>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="menu">Menu</Link>
        <Link to="reservations">Reservations</Link>
        <Link to="order online">Order Onlin</Link>
        <Link to="login">Login</Link>
      </ul>
    
    </nav>
    </>
  )
}

export default Nav

