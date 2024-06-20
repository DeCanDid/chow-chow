import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Drink = () => {
  let [drink, setdrink]=useState([])
  let endpoint="http://localhost:4444/drink"
  useEffect(()=>{
    axios.get(endpoint).then((response)=>{
      setdrink(response.data)
      console.log(response.data);
    })
  },[])
  return (
    <div>
      <div className="drinkImage">
       {
        drink.map((drinkImage)=>(
          <>
          <div className="drink">
          <div className='im'>
            <img src={drinkImage.img} alt="" srcset="" width='10px' />
            </div>
            <img src={drinkImage.image} alt="" />
            <h6>{drinkImage.name}</h6>
            <p><i class="icofont-clock-time"></i>{drinkImage.time}</p>
            <div className='text'>
            <p>{drinkImage.text1}</p>
            <p>{drinkImage.text2}</p>
            <p>{drinkImage.text3}</p>
            </div>
            <p></p>
            </div>
          </>
        ))
       }
      </div>
    </div>
  )
}

export default Drink