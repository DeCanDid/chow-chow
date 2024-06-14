import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'
import { motion } from 'framer-motion';
function Cart(props) {
  return (props.trigger2)?(
    <div className='cart'>
      <motion.div animate={{x:7}} initial={{x:-10}}className="inner2">
        <div className="check">
          <div className="lefft">
            <h2>Checkout</h2>
          </div>
          <div className="rightt">
            <h3>Cart</h3> <span></span>
            <Link onClick={()=>props.setTrigger2(false)} className='X'>X</Link>
          </div>
          {/* */}
        </div>
         <hr />  
        {props.children}
      </motion.div>
    </div>
  ):"";
}

export default Cart