import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './User.css';
import { motion } from 'framer-motion';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { useRef } from 'react';
import { useEffect } from 'react';
function User(props) {
  const [isSignUp, setIsSignUp] = useState(true);
  // const linkRef = useRef();
  // let [inspan,setInspan] = useState('')

  let CHANGES = ()=>{
    setIsSignUp(!isSignUp)
    // console.log(linkRef.current.innerText);
  }
  // console.log(linkRef.current);
  return (props.trigger3)?(
    <div className='User'>
      <motion.div animate={{scale:1}} initial={{scale:0.4}} className="inner">
               <div className="up">
          <div className="link">
        <Link onClick={()=>props.setTrigger3(false)} className='X2'>X</Link>
        </div>
        </div>
        <div>
        {isSignUp?<SignIn/>:<SignUp/>}
        {/* <span>{inspan}</span> */}
        <Link onClick={CHANGES} >
        {isSignUp ? " Sign Up" : "Sign In"}
      </Link>
      </div>
        {/* <SignUp></SignUp> */}
        {props.children}
      </motion.div>
    </div>
  ):"";
}

export default User