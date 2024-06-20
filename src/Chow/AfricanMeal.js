import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AfricanMeal = () => {
  const [Afri,setAfri]=useState([])
  let endpoint="http://localhost:1123/African"
  useEffect(()=>{
    axios.get(endpoint).then((response)=>{
      console.log(response.data);
      setAfri(response.data)
    })
  })
  return (
    <div>
      <h1>AfricanMeal</h1>
      <div className='AfriImage'>
        {
          Afri.map((item)=>(
           <div className='Afri'>
           <div className='im'>
            <img src={item.img} alt="" srcset="" width='10px' />
            </div> 
            <img src={item.image} alt="" />
            <h1>{item.text}</h1>
              <p><i class="icofont-clock-time"></i>{item.time}</p>
            <div className='text'>
            <p>{item.text1}</p>
            <p>{item.text2}</p>
            <p>{item.text3}</p>
            </div>
           </div>
          ))
        }
      </div>
    </div>
  )
}

export default AfricanMeal