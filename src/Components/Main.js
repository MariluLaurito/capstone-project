
import food from '../Assets/icons_assets/restauranfood.jpg';
import '../Styles/Main.css';
import ReserveTable from './ReserveTable';
import {Route, Link, Routes } from 'react-router-dom'


export default function Main({ availableTimes, handleAvailableTimesChange }) {


return (
    <>
      <main className='main'>
        <div className='box-container'>
        <div className='text-container'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranea restaurant,<br/> focused on traditionals recipes served with a modern twist.</p>
        <Link to='reserve' className='reserve'>Reserve a table</Link>
        </div>
        <div className='image-container'>
        <img src={food} alt="Food" className='food-image'/>
        </div>
        </div>
        <Routes>
        <Route path='reserve' 
        element={<ReserveTable availableTimes={availableTimes}  
        onAvailableTimesChange={handleAvailableTimesChange} />} />
      </Routes>
      </main>
    </>
  )
}
