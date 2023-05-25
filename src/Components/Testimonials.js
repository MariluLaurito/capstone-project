import React from 'react'
import couple from '../Assets/icons_assets/couple.jpg';
import girl from '../Assets/icons_assets/young woman.jpg';
import man from '../Assets/icons_assets/man 50years old.jpg';
import oldWoman from '../Assets/icons_assets/old lady.jpg';
import '../Styles/Testimonials.css';

function Testimonials() {

const testimonialsData = [
    {
        rating: 5,
        image: couple,
        name: "Johnny and Sara",
        review: "We recently had the pleasure of dining at Little Lemon, and we are thrilled to give it a well-deserved 5-star rating."

    },
    {
        rating: 5,
        image: girl,
        name: "Jessica",
        review: "The food was absolutely exceptional. Each dish was expertly prepared and bursting with flavor."
    },
    {
        rating: 5,
        image: man,
        name: "Bill",
        review: "The service was impeccable. The staff was attentive, friendly, and knowledgeable, making me feel welcomed and well-cared for throughout my meal. They anticipated my needs and provided excellent recommendations."
    },
    {
        rating: 5,
        image: oldWoman,
        name: "Maria",
        review: "The combination of delicious food, cozy ambiance, and outstanding service made it a memorable evening for us. We highly recommend this restaurant to anyone looking for a remarkable dining experience."
    },
];




  return (
    <div className='testimonials'>
        <h1 className='testimonial-header'>Testimonials</h1>
        <div className='card-testimonial-container'>
            {testimonialsData.map((testimonial,index) => (
                <div className='card-testimonial' key={index}>
                    <p className='card-testimonial-rating'>Ratings: {testimonial.rating}</p>
                    <div className='card-content'>
                    <img src={testimonial.image} alt={testimonial.name} className='img-testimonial' />
                    <h4 className='name-testimonial'>{testimonial.name}</h4>
                    </div>
                    <p className='review-testimonial'>{testimonial.review}</p>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials
