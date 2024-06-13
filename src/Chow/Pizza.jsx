import React, { useState,useEffect } from 'react'
import axios from 'axios'

const Pizza = () => {
  const[pizza,setpizza]=useState([])
 useEffect(()=>{
  axios.get("http://localhost:4000/pizza").then(response=>{
    setpizza(response.data)
  })
 },[])
  return (
    <div className='item1'>
      {
        pizza.map((item1)=>(
          <div className='content'>
            <img src={item1.image} alt="" />
            {/* <p>{item1.name}</p> */}
            <div className='item2'>
            <p>{item1.name}</p>
            <small>{item1.rate}<i class="icofont-star"></i></small>
            </div>
            <p><i class="icofont-clock-time"></i>{item1.time}</p>
            <p>{item1.text}</p>
            {/* < */}

          </div>
        ))
      }
    </div>
  )
}

export default Pizza