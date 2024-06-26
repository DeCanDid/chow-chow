import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Burgers = () => {
  const[burger,setburger]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:1111/burger").then(response=>{
      setburger(response.data)
    })
  }, [])
  return (
    <div className='item1'>
      {
        burger.map((item)=>(
          <div className='content'>
            <img src={item.images} alt="" />
            {/* <p>{item.name}</p> */}
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

export default Burgers