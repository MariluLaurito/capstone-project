 import React from 'react'
 import salad from '../Assets/icons_assets/greek salad.jpg'
 import bruschetta from '../Assets/icons_assets/bruchetta.svg'
 import pasta from '../Assets/icons_assets/Carbonara.jpg'
 import lemon from '../Assets/icons_assets/lemon dessert.jpg'
 import '../Styles/Highlights.css'


 function Highlights() {

    const cardData = [
        {
            image: salad,
            title: "Greek Salad",
            price: "$12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and ours Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        },
        {
            image: bruschetta,
            title: "Bruschetta",
            price: "$9.99",
            description: 'Traditional Italian bruschetta with fresh tomatoes, basil, garlic and seasoned with salt and olive oil.',

        },
        {
            image: pasta,
            title: "Pasta Carbonara",
            price: "$15.99",
            description: 'Classic Italian pasta dish with bacon, eggs, cheese, and black pepper.',
        },
        {
            image: lemon,
            title: "Lemon Dessert",
            price: "$7.99",
            description:"This comes straight from grandma's recipe book every last ingredient has been sourced and is as authentic as can be imagined. ",
        },
    ];

   return (
     <div className='highlights'>
        <div className='special'>
       <h1 className='special-title'>This Weeks Specials!</h1>
       <button className='special-button'>Online Menu</button>
       </div>
       <div className='card-container'>
       {cardData.map((card,index) =>(
        <div key={index} className='card'>
            <img src={card.image} alt={card.title} className='img-card' />
            <div className='card-title-price-container'>
            <h3>{card.title}</h3>
            <p className='price'>{card.price}</p>
            </div>
            <p>{card.description}</p>
            <div className='delivery-container'>
                <p className='order-delivery'>Order a delivery</p>
                <span class="material-symbols-outlined">
                 pedal_bike
                </span>
            </div>
        </div>

       ))}
       </div>

     </div>
   )
 }

 export default Highlights
