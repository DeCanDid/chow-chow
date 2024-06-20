import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Restaurant from './Chow/Restaurant';
import Supermarket from './Chow/Supermarket';
import Pharmacy from './Chow/Pharmacy';
import Local from './Chow/Local';
import FitFarm from './Chow/FitFarm';
import AfricanMeal from './Chow/AfricanMeal';
import Drink from './Chow/Drink';
import Landing from './Chow/Landing'

function App() {
  return(
    <>
      <div>
      {/* <Restaurant/> */}      
      <Routes>
      <Route path="/" element={<Landing/>}/>
    <Route path='/Restaurant' element={<Restaurant/>}/>
    <Route path='/Supermarket' element={<Supermarket/>}/>
    <Route path='/Pharmacy' element={<Pharmacy/>}/>
    <Route path='/Local' element={<Local/>}/>
    <Route path='/FitFarm' element={<FitFarm/>}/>
    <Route path='Drink' element={<Drink/>}/>
    <Route path='AfricanMeal' element={<AfricanMeal/>}/>
    </Routes>
      
      </div>
    </>
  )
}

export default App;
