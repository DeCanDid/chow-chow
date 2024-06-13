import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import user from '../data.json'

const All = () => {
  const[all,setall]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:1122/all").then(response=>{
      setall(response.data)
    })
  },[])
  return (
    <div className='item1'>
      {
        all.map((item)=>(
          <div className='content'>
            <img src={item.img} alt="" />
            {/* <p>{item.name}</p> */}
            <div className='item2'>
            <p>{item.name}</p>
            <small>{item.rate}<i class="icofont-star"></i></small>
            </div>
            <p><i class="icofont-clock-time"></i>{item.time}</p>
            <p>{item.text}</p>


          </div>
        ))
      }
    </div>
  )
}

export default All