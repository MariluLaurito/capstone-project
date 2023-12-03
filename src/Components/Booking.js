import React from 'react';
import {  useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
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
  const [formValues, setFormValues] = React.useState(initialValues);


  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleBlur = (event) => {
    const { name } = event.target;

    setFieldTouched(name, true);
  };

  const handleGoBack = () => {
    navigate(-1)
  }
  const handleGoFoward =() => {
    navigate('/confirmedBooking')
  }
   const onSubmit = (values) => {
    console.log(values);
    navigate('/confirmedBooking');
    setFormValues(values);
   }
// Define the submit form function
  const submitForm = async (formData) => {
    try {
      // Send the formData to your API or backend for processing
      const response = await submitAPI(formData);

      // Check if the response indicates a successful booking
      if (response === true) {
        // If successful, navigate to the booking confirmation page
        navigate('/confirmedBooking');
      } else {
        // Handle errors or display a message if the booking failed
        console.error('Booking failed:', response);
        // You can also show an error message to the user
      }
    } catch (error) {
      console.error('Error while submitting the form:', error);
      // Handle any API request errors here
      // You can also show an error message to the user
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
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitForm}>
       <Form className='inputAndLabel-container'>
         <div>
            <label htmlFor='firstName' className='label'>*First name</label>
            <Field 
            type="text" 
            placeholder="First name"
            id="firstName" 
            name="firstName"
            className="field" 
            value={formValues.firstName}
            onChange={handleChange}
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
             value={formValues.lastName}
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
           value={formValues.phoneNumber}
           onChange={handleChange}/>
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
            value={formValues.email}
            onChange={handleChange}/>
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
            value={formValues.password}
            onChange={handleChange}/>
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
            value={formValues.optional}
            onChange={handleChange}/>
         </div>
         <div>
            <button onClick={handleGoFoward} className='continue-btn' type="submit" >Continue</button>
         </div>
       </Form>
      </Formik>
    </div>
  )
}

export default Booking
