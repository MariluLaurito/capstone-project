import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Field, Form, Formik } from 'formik';
import restaurant from '../Assets/icons_assets/restaurant.jpg';
import reserve from '../Assets/icons_assets/reserved-tablerestaurant.jpg'
import '../Styles/ReserveTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';



const initialValues = {
  date: '',
  time: '',
  numberOfDiners: 'Number of Diners',
  Occasion: 'Occasion',
  seatingOptions: 'outside',

};
const getCurrentTime = () => {
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  // Add leading zero if hours/minutes is less than 10
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${minutes}`;
};


function ReserveTable({availableTimes, onAvailableTimesChange, availableDiners, onAvailableDiners }) {
  console.log('Available Times', availableTimes);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    ...initialValues,
    time: getCurrentTime(),
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onSubmit = (values) => {
    console.log(values);
    navigate('/booking');
    setFormValues(values);
    const updatedAvailableTimes =['11:00 AM', '12:00 PM', '01:00 PM'];
    onAvailableTimesChange(updatedAvailableTimes);
    };

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  // Add leading zero if month/day is less than 10
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
};



const currentDate = getCurrentDate();
const currentTime = getCurrentTime();




 return (
    <div className='reserve-table'>
      <div className='reserve-title'>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      </div>
      <h3 className='reserve-secondSub'>Find a table for any occasion!</h3>
      <div className='reserve-image'>
      <img src={restaurant} alt='Restaurant' className='resta-reserve' />
      <img src={reserve} alt='Reserve' className='reserve-tavle' />
      </div>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="formContainer">
          <div className="fieldWrapper">
          <div>
            <label htmlFor='date' className="labelDate">Date:</label>
            <Field 
            type="date" 
            id="date" 
            name="date" 
            className="fieldDate" 
            placeholder="Date" 
            value={formValues.date} 
            onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor='time' className="labelTime">Time:</label>
            <Field as="select"
             id="time"
              name="time"
              className="fieldTime"
              placeholder="Select a time"
             value={formValues.time}
             onChange={handleChange}>
              {availableTimes &&availableTimes.map((time) => (
                <option key={time} value={time}>{time}</option>
                ))}
             </Field>
          </div>
          </div>
          <div className="wrapper-numberDiners">
           <Field as="select" 
           id="numberOfDiners"
            name="numberOfDiners"
             className="fieldNumberOfD"
              placeholder="Number Of Diners"
              value={formValues.numberOfDiners}
              onChange={handleChange}>
                <option value="">Number of Diners</option>
                {availableDiners.map((number) => (
                  <option key={number} value={number}>{number}</option>
                ))}
           </Field>
          </div>
          <div className='wrapper-occasion'>
            <Field as="select"
             id="select" 
             name="select"  
             className="fieldOccasion"
             value={formValues.select}
             onChange={handleChange}>
              <option value="">Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="engagement">Engagement</option>
            </Field>
            <div>
            <FontAwesomeIcon icon={faChampagneGlasses} className='select-icon' />
            </div>
            </div>
            <div className='wrapper-seatingOption'>
              <label className="label-seatingOption">Seating options:</label>
              <div className='outside-inside'>
                <label className='labelOutside'>
                Outside
                  <Field type="radio" 
                  name="seatingOptions" 
                   value="outside" 
                   className="radioOutside"  
                   checked={formValues.seatingOptions === "outside"}
                   onChange={handleChange}/>
                </label>
                <label className='labelInside'>
                Inside
                <Field type="radio" 
                name="seatingOptions" 
                value="inside"  
                className="radioInside" 
                checked={formValues.seatingOptions === "inside"}
                onChange={handleChange}/>
                </label>
              </div>
            </div>
          <div>
            <button type="submit" className='letsGo-btn'>Let's Go</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default ReserveTable
