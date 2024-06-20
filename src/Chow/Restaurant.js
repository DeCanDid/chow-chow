import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


const Restaurant = () => {
  let endpoint = "http://localhost:5000/Store" 
  const [info, setInfo] = useState([])

  useEffect(() => {
    axios.get(endpoint).then((response) => {
      console.log(response.data);
      setInfo(response.data);
    })
  }, []);

  return (
    <div className='wrap'>
      <div className="all">
      <h4>All Restaurants</h4>
      <div className="ResImage">
        {
          info.map((item) => (
            <div className='Res'>
            <div className='im'>
            <img src={item.img} alt="" srcset="" width='10px' />
            </div>
              <img src={item.Image}  />
              <div className="rate">
              <p>{item.text}</p>
              <p>{item.rate}</p>
              </div>
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
      {/* <div className="view">
        <Link to='/view-more'>View More</Link> 
      </div> */}
    </div>
  )
}

export default Restaurant























