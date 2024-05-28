import logo from './logo.svg';
import './App.css';
import Test from './CANDID/Test';
import LandingHeader from './CANDID/LandingHeader';
import Cvr from './CANDID/ChildRoute/Cvr';
import Carousel from './CANDID/Carousel/Carousel';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <>
    <Routes>
      <Route path='/' element={<LandingHeader/>}/>

    </Routes>
    
        {/* <LandingHeader/> */}
        <Cvr/>
        <Carousel/>

     <section 
    className='banner_background'>
    <div className="banner_b">


    </div>
  </section>
    </>
  );
}

export default App;
