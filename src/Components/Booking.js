import React from 'react';
import {  useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Booking.css';
import ConfirmedBooking from './ConfirmedBooking';



const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber:"",
    email:"",
    password: "",
    optional: "",

};

function Booking() {
const navigate = useNavigate();
const [isSubmitted, setIsSubmitted] = useState(false);



  const handleGoBack = () => {
    navigate(-1)
  };
  
  const onSubmit = (values) => {
    console.log(values);
    setIsSubmitted(true);
   }
  
  const submitForm = async (formData) => {
    try {
      setIsSubmitted(true);
        navigate('/confirmedBooking');
      } catch (error) {
      console.error('Error while submitting the form:', error);
    }
  };
  
    const validationSchema = Yup.object({

        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        phoneNumber: Yup.string().required('Phone Number is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(20, 'Password must be at most 20 characters'),
    });


  return (
   
    <div className='booking'>
        <div>
            <button onClick={handleGoBack} className="back-button">
            <FontAwesomeIcon icon={faArrowLeftLong}  className="arrow-icon"/>
            </button>
        </div>
      <div className='title-subtitle'>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      </div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ handleChange, handleBlur, values }) => ( 
       <Form className='inputAndLabel-container'>
         <div>
            <label htmlFor='firstName' className='label'>*First name</label>
            <Field 
            type="text" 
            placeholder="First name"
            id="firstName" 
            name="firstName"
            className="field" 
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            />
           <ErrorMessage name="firstName" component="div" className='error-message' />
         </div>
         <div>
            <label htmlFor='lastName' className='label'>*Last name</label>
            <Field type="text" 
            placeholder="Last name"
             id="lastName" 
             name="lastName" 
             className="field" 
             value={values.lastName}
             onChange={handleChange}/>
            <ErrorMessage name="lastName" component="div" className='error-message' />
         </div>
         <div>
         <label htmlFor='phoneNumber' className='label'>*PhoneNumber</label>
         <Field 
          type="tel"
          placeholder="07895678390"
           id="phoneNumber" 
           name="phoneNumber" 
           className="field" 
           value={values.phoneNumber}
           onChange={handleChange}
           onBlur={handleBlur}
           />
         <ErrorMessage name="phoneNumber" component="div"  className='error-message'/>
         </div>
         <div>
          <label htmlFor='email' className='label'>*Email</label>
          <Field 
           type="email"
           placeholder="myemail@mail.com" 
           id="email"
            name="email"
            className="field" 
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}/>
          <ErrorMessage name="email" component="div"  className='error-message'/>
         </div>
         <div>
            <label htmlFor='password' className='label'>*Password</label>
            <Field 
            type="password" 
            placeholder="*******" 
            id="password" 
            name="password" 
            className="field" 
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}/>
            <ErrorMessage name="password" component="div"  className='error-message'/>
         </div>
         <div>
            <label htmlFor='optional' className='label'>Add a special request (optional)</label>
            <Field 
            as="textarea" 
            placeholder="Add a special request (optional)" 
            id="optional" 
            name="optional" 
            rows={7} 
            className="textarea" 
            value={values.optional}
            onChange={handleChange}
            onBlur={handleBlur}/>
         </div>
         <div>
            <button onClick={submitForm} className='continue-btn' type="submit" aria-label='on Click'>Continue</button>
            {isSubmitted && (<ConfirmedBooking />)} 
         </div>
       </Form>
       )}
      </Formik>
    </div>
  )
}

export default Booking
