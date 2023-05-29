import React from 'react'
import { Header } from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'
import Highlights from './Highlights'
import Testimonials from './Testimonials'

function Layout() {
  return (
    <div>
      <div className='layout'>
        <header>
      <Header />
      </header>
      <main>
        <Outlet />
        <Testimonials />
      </main>
      <footer>
      <Footer />
      </footer>
    </div>
    </div>
  )
}

export default Layout
