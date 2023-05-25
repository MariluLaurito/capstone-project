import food from '../Assets/icons_assets/restauranfood.jpg'
import '../Styles/Main.css'

import React from 'react'


export default function Main() {
  return (
    <>
      <main className='main'>
        <div className='box-container'>
        <div className='text-container'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranea restaurant,<br/> focused on traditionals recipes served with a modern twist.</p>
        <button>Reserve a table</button>
        </div>
        <div className='image-container'>
        <img src={food} alt="Food" className='food-image'/>
        </div>
        </div>
      </main>
    </>
  )
}
