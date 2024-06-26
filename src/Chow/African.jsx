import axios from 'axios'
import React, { useEffect, useState } from 'react'

const African = () => {
  const[africa,setafrica]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:1133/african").then(response=>{
      setafrica(response.data)
    })
  })
  return (
    <div className='item1'>
      {
        africa.map((item)=>(
          <div className='content'>
            <img src={item.images} alt="" />
            {/* <p>{item.name}</p> */}
            <div className='item2'>
            <p>{item.name}</p>
            <small>{item.rate}<i class="icofont-star"></i></small>
            </div>
            <p><i class="icofont-clock-time"></i>{item.time}</p>
            <p>{item.text1}</p>
          </div>
        ))
      }
    </div>
  )
}

export default African