import React from 'react';
import './Home.css';
import HomeImg from './home-img.jpg';

export default function Home(){
    return (
        <center>
        <div>
        <marquee>
        <div className='discountMove'>Great Discounts</div>
        </marquee>
           <img src={HomeImg} alt='' className='Home-img'></img>
           
        </div>
        </center>
    );
}