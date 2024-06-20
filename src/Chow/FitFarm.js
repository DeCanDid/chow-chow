import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const FitFarm = () => {
  const [fit,setfit]=useState([])
  let endpoint="http://localhost:3333/FitFarm"
  useEffect(()=>{
    axios.get(endpoint).then((response)=>{
      setfit(response.data)
      console.log(response.data);
  })
  },[])
  return (
    <div>
    <div className="fitImage">
      {
        fit.map((fitItem)=>(
          <>
          <div className="fit">
            <div className='im'>
            <img src={fitItem.img} alt="" srcset="" width='10px' />
            </div>
            <img src={fitItem.image} alt="" />
            <h1>{fitItem.name}</h1>
            <p ><i class="icofont-clock-time"></i>{fitItem.time}</p>
            <div className='text'>
            <p>{fitItem.text1}</p>
            <p>{fitItem.text2}</p>
            <p>{fitItem.text3}</p>
            </div>
            </div>
          </>
        ))
      }
    </div>
    </div>
  )
}

export default FitFarm