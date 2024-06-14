import React from 'react'
import { Link } from 'react-router-dom'
import Phone from "./Phone"
function SignIn() {
  
  return (
    <div className="SIGG">
    <h3>Sign in to continue</h3>
    <h2>Sign in</h2>
    {/* <h3>{action} to continue</h3> */}
    <div className="phone">
      <Phone></Phone>
    </div>
    <div className="Innit">
    <Link className="In">Sign In</Link></div>
    {/* <span>New To Chowdeck?</span> <Link>Sign Up</Link> */}
</div>
  )
}

export default SignIn