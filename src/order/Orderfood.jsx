import React from 'react'
import './Orderfood.css'
// import {motion} from 'framer-motion'
const Orderfood = (props) => {
  let num = 1
  return(props.trigger) ? (
    <body>
    <div className='popup'style={{backgroundColor:'#13121236'}} >
    <div className="popup-inner">
    <button className="close" onClick={()=> props.setTrigger(false)}>X</button>
      {props.children}
    </div>
    </div>
   </body>
  ):"";
}

export default Orderfood