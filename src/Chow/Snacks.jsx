import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Snacks = () => {
  const[snack,setsnacks]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3333/snacks").then(response=>{
      setsnacks(response.data)
    })
  },[])
  return (
    <div className='item1'>
      {
        snack.map((item)=>(
          <div className='content'>
            <img src={item.image} alt="" />
            <div className='item2'>
            <p>{item.name}</p>
            <small>{item.rate}<i class="icofont-star"></i></small>
            </div>
            <p><i class="icofont-clock-time"></i>{item.time}</p>
            <p>{item.slogan}</p>

          </div>
        ))
      }
    </div>
  )
}

export default Snacks