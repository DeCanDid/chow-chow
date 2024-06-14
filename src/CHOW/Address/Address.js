import React, { useState, useEffect } from 'react'
import './Address.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
function Address(props) {
  return (props.trigger)?(
    <div id='add'>
      <motion.div animate={{scale:1}} initial={{scale:0.4}} className="inner">
      <div className="X">
        <h2>DELIVERY ADDRESS</h2>
      <Link to='/CHOW/Chowstore' className='X' onClick={()=>props.setTrigger(false)}>X</Link>
      </div>
      {props.children}
      {/* <img src="location-dot-solid.svg" alt="" />
      <input type="search"  id='added' placeholder='Enter a new address'/> */}
      </motion.div>
      </div>
  ):"";
}

export default Address