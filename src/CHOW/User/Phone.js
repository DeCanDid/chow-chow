import React, { useState } from 'react'
// import { useBlocker } from 'react-router/dist/lib/hooks'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import'./Phone.css'
function Phone() {
    let [Phonenumber,setPhonenumber] = useState('')
    let [valid,setValid] = useState(true)
    let handleChange = (value)=>{
        setPhonenumber(value)
        setValid(validatePhoneNumber(value));
    }
    let validatePhoneNumber = (Phonenumber)=>{
        let phoneNumberPattern = /^\d[10]$/
        return phoneNumberPattern.test(Phonenumber)
    }
  return (
    <div className='phonne'>
        <label >Phone Number:</label>
            <PhoneInput country={'us'} inputProps={{required: true}} value={Phonenumber} onChange={handleChange} placeholder='08012345678'/>
        
        {!valid && <p>Please enter a valid phone number</p>}
        <style jsx>{`
        .PhoneInput input{
          width: 300px;
          height: 50px;
          font-size: 20px;
          padding: 10px;
        }
      `}</style>
    </div>
  )
}

export default Phone