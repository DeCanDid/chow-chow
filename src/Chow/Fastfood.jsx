import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fastfood = () => {
  const[food,setfood]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:4444/food").then(response=>{
      setfood(response.data)
      console.log(response.data)
    })
  },[])
  return (
    <div className='item1'>
      {
        food.map((item)=>(
          <div className='content'>
            <img src={item.images} alt="" />
            <div className='item2'>
            <p>{item.name}</p>
            <small>{item.rate}<i class="icofont-star"></i></small>
            </div>
            {/* <p>{item.name}</p> */}
            <p><i class="icofont-clock-time"></i>{item.time}</p>
            <p>{item.slogan}</p>

          </div>
        ))
      }
    </div>
  )
}

export default Fastfood