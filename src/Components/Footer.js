import lemon from '../Assets/icons_assets/little lemon green logo.png'
import facebook from '../Assets/icons_assets/Facebook-icon.png'
import insta from '../Assets/icons_assets/instagram.png'
import '../Styles/Footer.css'


import React from 'react'

function Footer() {
  return (
    <>
    <footer className='footer'>
      <img src={lemon} alt="" className='logo-footer'/>
      <section className='doormat'>
        <h3 className='doormat-navi'>Doormat Navigation</h3>
        <ul className='list-footer'>
            <li><a href="/" className='link'>Home</a></li>
            <li><a href='/about' className='link'>About</a></li>
            <li><a href='/menu' className='link'>Menu</a></li>
            <li><a href='/reservations' className='link'>Reservations</a></li>
            <li><a href='/orderOnline' className='link'>Order Online</a></li>
            <li><a href='/login' className='link'>LogIn</a></li>
        </ul>
      </section>
      <section className='contact'>
        <h3 className='contact-con'>Contact</h3>
        <ul className='list-footer'>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
        </ul>
      </section>
      <section className='social'>
        <h3 className='social-m'>Social Media</h3>
        <ul className='list-footer'>
          <div className='facebook-container'>
            <img src={facebook} alt='facebook' className='facebook'></img>
            <li>Facebook</li>
          </div>
          <div className='instagram-container'>
            <img src={insta} alt='insta' className='instagram'></img>
            <li>Instagram</li>
            </div>
        </ul>
      </section>
    </footer>
    </>
  )
}

export default Footer
