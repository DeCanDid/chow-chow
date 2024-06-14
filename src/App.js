import { Route, Routes } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Chowstore from './CHOW/Chowstore/Chowstore';
import Search from './CHOW/Search/Search';
import Cart from './CHOW/Cart/Cart';
import Address from './CHOW/Address/Address';
import User from './CHOW/User/User';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useEffect } from 'react';
import logo from './Creative-Digita-Technologies-Logo-new.png'
// import './Navchow.css'
// import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  let [popup,setPopupp]= useState(false)
  let [popup2,setPopup2] = useState(false)
  let [popup3,setPopup3] = useState(false)
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  // let ppp = useRef()
  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenSize(window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  // let [action,setaction] = useState("Sign Up")
  let Change = ()=>{
    setPopupp(true)
  }
  let Change2 = ()=>{
    setPopup2(true)
  }
  let Change3 = ()=>{
    setPopup3(true)
  }  
  console.log(screenSize)
  return(
    // <> 
       <div className='wraps'>
      <Router>
      <div className="wrapper">
              <div className="left">
            <Link><img src={logo} alt="" /></Link>
            <Link onClick={Change}>ADRESS</Link>
            <Address trigger={popup} setTrigger={setPopupp}>
            <input type="search"  id='added' placeholder='Enter a new address'/> 
            </Address>
        </div>
        {/* <div></div>
        <div></div> */}
        {
          screenSize<="768"?<div className="inputaddiing2">
            <Link ><input type="search" placeholder='Search Chowdeck...' id='adding'/></Link>
            </div>:""
        }
        <div className="right">
          {
            screenSize<="768"?"":<div className="inputaddiing">
            <Link><input type="search" placeholder='Search Chowdeck...' id='adding'/></Link>
            </div>
          }
            <div className="cartuser">
            <Link onClick={Change2}>Cart</Link>
            <Cart trigger2={popup2} setTrigger2={setPopup2}>
              <h1>Cart is empty</h1>
            </Cart>
            <Link onClick={Change3}>User</Link>
            <User trigger3={popup3} setTrigger3={setPopup3} >
              <span></span>
            </User>
            </div>
        </div>
        </div>
        {/* <Chowstore></Chowstore> */}
        {/* <h1>Screen Size: {screenSize}px</h1> */}
        <h1>I am</h1>
    <Footer></Footer>
    <Routes>
      <Route path='/CHOW/Chowstore' element={<Chowstore/>} />
      <Route path='/CHOW/Search' element={<Search/>}/>
      <Route path='/CHOW/Cart' element={<Cart />} />
      <Route path='/CHOW/Address' element={<Address/>} />
      <Route path='/CHOW/User' element={<User/>} />
    </Routes>
    </Router>

    </div>
    // {/* </> */}

  )
}

export default App;