import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Style.css"

// import {api} from "./Api"

const Chicken = () => {
  const[data,setdata]=useState([])
  // useEffect(()=>{
  //   axios.get()
  // })
  useEffect(()=>{
    let url ="http://localhost:5000/user"
    axios.get(url).then(response=>{
      setdata(response.data)
      console.log(response.data)
      // console.log(data.img)
    })
  },[])
  
  return (
    <div className='item1'>
      {/* <img src={data.images} alt="" /> */}
      {
        data.map((item)=>(
         <div className='content'>
          <img src={item.img} alt="" />
          <div className='item2'>
          <p>{item.restaurant}</p>
          <small>{item.rate}<i class="icofont-star"></i></small>
          </div>
         
          <p><i class="icofont-clock-time"></i> {item.time}</p>
          <div className='item3'>
            <small>{item.text}</small>
            <small>{item.text1}</small>
            <small>{item.text2}</small>
          </div>
          
         </div>

        ))
      }
      {/* <img src={data.images} alt="" /> */}
      {/* <img src={} alt="" /> */}
    </div>
  )
}

export default Chicken