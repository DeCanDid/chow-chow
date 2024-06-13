import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
// import Dynam from './Component1/Dynam';
import All from './Chow/All';
import Pizza from './Chow/Pizza';
import African from './Chow/African';
import Chicken from './Chow/Chicken';
import Drinks from './Chow/Drinks';
import Snacks from './Chow/Snacks';
import Fastfood from './Chow/Fastfood';
import Burgers from './Chow/Burgers';
import Parfait from './Chow/Parfait';


function App() {
  return(
    <>
      <div>
        <Routes>
          <Route path='/All'     element={<All/>}/>
          <Route path='/Pizza'   element={<Pizza/>}/>
          <Route path='/African' element={<African/>}/>
          <Route path='/Chicken' element={<Chicken/>}/>
          <Route path='/Drinks'  element={<Drinks/>}/>
          <Route path='/Snacks'  element={<Snacks/>}/>
          <Route path='/Burgers' element={<Burgers/>}/>
          <Route path='/Fastfood' element={<Fastfood/>}/>
          <Route path='/Parfait'  element={<Parfait/>}/>

        </Routes>
      </div>
    </>
  )
}

export default App;
