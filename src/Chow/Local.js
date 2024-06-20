import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Local = () => {
  const [local,setlocal]=useState([])
  let endpoint="http://localhost:2000/Local"

  useEffect(()=>{
    axios.get(endpoint).then((response)=>{
      console.log(response.data);
      setlocal(response.data)
    })
  },[])
  return (
    <div>
      <div className="localImage">
      {
        local.map((localItem)=>(
          <>
          <div className="local">
          <div className='im'>
            <img src={localItem.img} alt="" srcset="" width='10px' />
            </div>
            <img src={localItem.image} alt="" title={localItem.Title}/>
            <h5>{localItem.name}</h5>
            <p><i class="icofont-clock-time"></i>{localItem.time}</p>
            <p>{localItem.text}</p>

            </div>
          </>
        ))
      }
      </div>
    </div>
  )
}

export default Local