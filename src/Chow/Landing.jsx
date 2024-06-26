import React from 'react'
import {Link} from 'react-router-dom'
const Landing = () => {
  return (
    <div>
    <div className='all'>
        <h1>Order your delicious meals from our resturant in </h1>
        <h4>Choose from top categories</h4>
        <nav>
            <Link to={"/All"}>All</Link>
            <Link to={"/Pizza"}>Pizza</Link>
            <Link to={"/African"}>African</Link>
            <Link to={"/Chicken"}>Chicken</Link>
            <Link to={"/Drinks"}>Drinks</Link>
            <Link to={"/Snacks"}>Pastries</Link>
            <Link to={"/Burgers"}>Burgers</Link>
            <Link to={"/Fastfood"}>Fast Food</Link>
            <Link to={"/Parfait"}>Parfait</Link>
        </nav>
   
 </div>
   <form action="" className='one'>
     <input type="text" name="" id="page" placeholder='Search...'/>
   </form>
 </div>
    // <div>
    //     <div>
    //         <h1>Order your delicious meals from our resturant in </h1>
    //         <h4>Choose from top categories</h4>
    //         <nav>
    //             <Link to="/All"> All</Link>
    //             <Link to="/Pizza">Pizza</Link>
    //         </nav>
    //     </div>
    // </div>
  )
}

export default Landing