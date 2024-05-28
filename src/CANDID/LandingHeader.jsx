import React, {useState} from 'react'
import logo from '../Images/logoImage.png'
import playstore_logo from '../Images/playstore.png'
import './LandingHeader.css';
import { Link } from 'react-router-dom';
import Cvr from './ChildRoute/Cvr'
import Carousel from './Carousel/Carousel'

const LandingHeader = () => {
  return (
    <>
      {/* <section 
    className='banner_background'>
    <div className="banner_b"> */}
    
  <header class="top-nav">
    <div>
        <Link to='/'>
            <img src={logo} alt="" />
        </Link>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    
    <div className="ul_container">
    <ul class="ul_menu">
      <Link><li>Relay</li></Link>
      <Link><li>Company</li></Link>
      <Link><li>FAQ's</li></Link>
      <Link><li>Blog</li></Link>
      <Link><li>Contact</li></Link>
    </ul>
    </div>

    <div className='navs'>
      <Link to=''>Customers</Link>
      <Link to=''><i className="icofont-cart"></i></Link>
    </div>
  </header>

    <div className="anim_language">
      <h1>You don chow?</h1>
      <div className="download_app">
        <a href="">
          <img style={{width:'45px'}} src={playstore_logo} alt="" />
        <button>Download on Google play</button>
        </a>

        <a href="">
        <i className="icofont-brand-apple"></i>
        <button>Download on Apple Store</button>
        </a>
      </div>
    </div>
    {/* </div> */}


    {/* <Cvr/>
    <Carousel/> */}

{/* // </section> */}
        
    </>
  )
}

export default LandingHeader