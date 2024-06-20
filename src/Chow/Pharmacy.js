import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Pharmacy = () => {
  const [Pham,setPham]=useState([])
  let endpoint="http://localhost:2020/Phramacy"
  useEffect(()=>{
    axios.get(endpoint).then((response)=>{
      setPham(response.data)
      console.log(response.data);
    })
  },[])
  return (
    <div>
    <div className="pharmImage">
      {
        Pham.map((phamItem)=>(
          <>
          <div className="pharm">
          <div className='im'>
            <img src={phamItem.img} alt="" srcset=""/>
            </div>
            <img src={phamItem.images} alt="" title={phamItem.Title} />
            <h5>{phamItem.name}</h5>
            <p><i class="icofont-clock-time"></i>{phamItem.time}</p>
            <p>{phamItem.text}</p>

          </div>
          </>
        ))
      }
    </div>

    </div>
  )
}

export default Pharmacy