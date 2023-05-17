import logo from '../Assets/icons_assets/logo little lemon.png'

import React from 'react'

function Footer() {
  return (
    <>
    <footer className='footer'>
      <img src={logo} alt=""/>
      <section>
        <h3>Doormat Navigation</h3>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>LogIn</li>
        </ul>
      </section>
      <section>
        <h3>Contact</h3>
        <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
        </ul>
      </section>
      <section>
        <h3>Social Media</h3>
        <ul>
            <li>Facebook</li>
            <li>Instagram</li>
        </ul>
      </section>
    </footer>
    </>
  )
}

export default Footer
