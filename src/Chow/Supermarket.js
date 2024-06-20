import React, { useState ,useEffect } from 'react'
import axios from 'axios'
import './Chow.css'

const Supermarket = () => {

  const [superM, setsuperM] = useState([])
  
  let endpoint="http://localhost:1112/SuperMarket"
useEffect(() => {
  axios.get(endpoint).then((response) => {
    console.log(response.data);
    setsuperM(response.data);
  })
}, []);
  return (
    <div>
   
   <div className='superImage'>
    {
      superM.map((supermItem)=>(
        <>
        <div className='super'>
        <div className='im'>
            <img src={supermItem.img} alt="" srcset="" width='10px' />
            </div>
        <img src={supermItem.image} alt="" />
        <h5>{supermItem.name}</h5>
        <p><i class="icofont-clock-time"></i>{supermItem.time}</p>
        <p>{supermItem.text}</p>
        </div>
        </>
      ))
    }
   </div>
   

    </div>
  )
}

export default Supermarket