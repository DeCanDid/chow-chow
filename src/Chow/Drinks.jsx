import axios from 'axios'
import React, { useState ,useEffect} from 'react'

const Drinks = () => {
  const[drink,setdrink]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5555/drinks").then(response=>{
      setdrink(response.data)
    })
  })
  return (
    <div className='item1'>
      {
        drink.map((item)=>(
          <div className='content'>
            <img src={item.image} alt="" />
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

export default Drinks