import React from 'react';
// import Link from 'react-router-dom'
import playstore_logo from '../../Images/playstore.png'
import apple_logo from '../../Images/apple_logo.jpg'

import './cvr.css'

const Cvr = () => {
  return (
    <>
    <div className="mini_route">

    <div className="routes">
    <a href="">Customer</a>
    <a href="">Vendors</a>
    <a href="">Riders</a>
    </div>

    <div className="display_route">
        <h2>Try the App</h2>
        <p>
            Have meals delivered to you within 
            minutes from a wide variety of restaurants 
            ranging from African to Continental 
            cuisines to satisfy your cravings.
        </p>
        <div>
        <a href="">
          <i class="icofont-ui-play"></i>
        </a>

        <a href="">
        <i className="icofont-brand-apple"></i>
        </a>
        </div>
    </div>



</div>

    </>
  )
}

export default Cvr