
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route,  RouterProvider, Routes } from 'react-router-dom';
import Highlights from './Components/Highlights';
import Main from './Components/Main';
import ReserveTable from './Components/ReserveTable';
import Layout from './Components/Layout';
import About from './Components/About';
import Booking from './Components/Booking';
import { fetchData } from './Components/api';
import { useEffect, useReducer } from 'react';
import ConfirmedBooking from './Components/ConfirmedBooking';

const reducer = (state, action) => {
  switch (action.type) {
     case 'UPDATE_TIMES': 
     return { ...state, availableTimes: action.payload }
     case 'UPDATE_DINERS': 
     return { ...state, availableDiners: action.payload }
    default:
      return state;
  }
}

function App() {
  const initialState = {
    availableTimes: ['05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM'],
    availableDiners: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  const [state, dispatch] = useReducer(reducer, initialState)

const initializeTimes = async() => {
  try{
    const today = new Date();
    const todayDate = today.toISOString().split('T')[0];
    const data = await fetchData(todayDate);
 
    console.log('Fetched data:' , data);

    dispatch({ type: 'UPDATE_TIMES', payload: data.availableTimes })

  } catch(error) {
    console.error('Error initializing times', error)
  }
};


useEffect( () => {
  initializeTimes()
}, []);



const handleAvailableTimesChange = (newTimes) => {
  dispatch({ type: 'UPDATE_TIMES', payload: newTimes });

};
const handleAvailableDiners =(newDiners) => {
  dispatch({ type: 'UPDATE_DINERS', payload: newDiners })
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route exact path='/' element={<Main availableTimes={state.availableTimes}  availableDiners={state.availableDiners}/>} />
    <Route path='reserve' 
    element={<ReserveTable 
    availableTimes={state.availableTimes} 
    onAvailableTimesChange={handleAvailableTimesChange} 
    availableDiners={state.availableDiners}
    onAvailableDiners={handleAvailableDiners}/>} />
    <Route path='menu' element={<Highlights />} />
    <Route path='about' element={<About />} />
    <Route path='booking' element={<Booking />}/>
    <Route path='confirmedBooking' element={<ConfirmedBooking />} />
    </Route>

  )
)


  return (
    <>
    <RouterProvider router={router} />

   </>
  );
}

export default App;
