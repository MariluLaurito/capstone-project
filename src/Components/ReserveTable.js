import React from 'react'
import { Formik } from 'formik';
import restaurant from '../Assets/icons_assets/restaurant.jpg';
import reserve from '../Assets/icons_assets/reserved-tablerestaurant.jpg'
import '../Styles/ReserveTable.css';




function ReserveTable() {
  return (
    <div className='reserve-table'>
      <div className='reserve-title'>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      </div>
      <div className='reserve-image'>
      <img src={restaurant} alt='Restaurant' className='resta-reserve' />
      <img src={reserve} alt='Reserve' className='reserve-tavle' />
      </div>
    </div>
  )
}

export default ReserveTable
