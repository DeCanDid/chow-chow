import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='SignUp'>
       <h2>Sign Up</h2>
       <div className="infowrapper">
       <div>
       <label htmlFor="">First Name:</label><br />
        <input type="text" /></div>
        <div>
        <label htmlFor="">Last Name:</label><br />
        <input type="text" />
        </div>
        <div className='emal'>
          <label htmlFor="">Email:</label><br />
          <input type="email" name="" id="" />
        </div>
        <div className="phonn">
        <label htmlFor="">Phone Number:</label><br />
          <input type="number"/>
        </div>
         {/* <div className="nxt"> */}
        <Link>Next</Link>
        {/* </div> */}
        </div>
       
    </div>
  )
}

export default SignUp