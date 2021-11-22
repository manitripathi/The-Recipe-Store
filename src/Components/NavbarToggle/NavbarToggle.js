import React from "react";
import './NavbarToggle.css';
import Home from '../Home/Home';
import NearbyStores from "../NearbyStores/NearbyStores";
import Discountsection from '../DiscountSection/Discount';
import Contact from '../Contact/Contact';
import {Link,Switch,Route} from 'react-router-dom';

export default function Navbar(){
  const navbar=[
      {to:'/', desc:'Home', id:1},
      {to:'/Nearbystores', desc:'Nearby Stores', id:2},
      {to:'/discount', desc:'Above 45% Discount Stores', id:3},
      {to:'/Contact', desc:'Contact', id:4},
  ];
  const navbarLink= navbar.map((value,index)=>(
      <Link to={value.to} key={index}  className='link'>
          {value.desc}
      </Link>
  ));
  return(
      <div className='divMain'>
      <div className='NavbarOptions'>{navbarLink}</div>
      <Switch>
          <Route path='/' component={Home} exact></Route>
          <Route path='/NearbyStores' component={NearbyStores} exact></Route>
          <Route path='/discount' component={Discountsection} exact></Route>
          <Route path='/contact' component={Contact} exact></Route>
      </Switch>
      </div>
  );
}
