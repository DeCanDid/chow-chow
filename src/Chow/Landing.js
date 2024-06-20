import React from 'react'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import img from "./IMG/House.webp"
import basket from "./IMG/basket.webp"
import pharm from "./IMG/pharmacy.svg"
import local from './IMG/local-market.svg'
import Afri from './IMG/Afri.webp'
import Drink from './IMG/Drink.webp'
import Fit from './IMG/Fit.webp'
const Landing = () => {
  return (
    <div className='wrap'>
    <div className="category"> 
    <h3>Explore Categories</h3>
    <div className="first">
    <div className="box1">
    <div className="img"> <img src={img} alt="" srcset="" /></div> 
    <Link to='Restaurant'>Restaurant</Link></div>
    <div className="box2">
    <div className="img"> <img src={basket} alt="" srcset="" /></div> 
    <Link to='Supermarket'>Super-market</Link>
    </div>
    <div className="box3">
    <div className="img"> <img src={pharm} alt="" srcset="" /></div> 
    <Link to='Pharmacy'>Pharmacy</Link></div>
    <div className="box4">
    <div className="img"> <img src={local} alt="" srcset="" /></div> 
    <Link to='Local'>Local Market</Link></div>
    <div className="box5">
    <div className="img"> <img src={Afri} alt="" srcset="" height='40px'/></div> 
    <Link to='AfricanMeal'>African Meal</Link></div>
    <div className="box6">
    <div className="img"> <img src={Fit} alt="" srcset="" height='40px'  /></div> 
    <Link to='FitFarm'> FitFarm</Link></div>
    <div className="box7">
    <div className="img"> <img src={Drink} alt="" srcset="" height='35px' /></div> 
    <Link to='Drink'>Drink</Link></div>
</div>
    <div className="second">
      <div className="one">
      <h4>Get the chow <br /> combo now</h4>
      <button>2200 <small>only</small></button>
      </div>
      <div className="two">
      <h4>Send packages <br /> easily with relay! ♡</h4>
      </div>
    </div>
    </div>    
 
  </div>
  )
}

export default Landing


