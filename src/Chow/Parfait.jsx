import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Parfait = () => {
  const[parfait,setparfait]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:2222/parfait").then(response=>{
      setparfait(response.data)
    })
  })
  return (
    <div className='item1'>
      {
        parfait.map((item)=>(
          <div className='content'>
            <img src={item.image} alt="" />
            <div className='item2'>
            <p>{item.name}</p>
            <small>{item.rate}<i class="icofont-star"></i></small>
            </div>
            {/* <p>{item.name}</p> */}
            <p><i class="icofont-clock-time"></i>{item.time}</p>
            <p>{item.text}</p>

          </div>
        ))
      }
    </div>
  )
}

export default Parfait