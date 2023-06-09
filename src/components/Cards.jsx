import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img1 from "../assets/images/img-9.jpg";
import img2 from "../assets/images/img-2.jpg";
import img3 from "../assets/images/img-3.jpg";
import img4 from "../assets/images/img-4.jpg";
import img5 from "../assets/images/img-8.jpg";

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Check out these EPIC destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src={img1}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem 
              src={img2}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem 
              src={img3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Adventure"
              path="/services"
            />
            <CardItem 
              src={img4}
              text="Experience Football on Top of the Himalayan Mountains"
              label="Luxury"
              path="/services"
            />
            <CardItem 
              src={img5}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards