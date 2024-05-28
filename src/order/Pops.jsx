import React from "react";
import Orderfood from "./Orderfood";
import { useState } from "react";
import image from "./image.png";
import "./Pops.css";

const Pops = () => {
  const [pop, setpop] = useState(false);
  return (
      <body>
      <Orderfood trigger={pop} setTrigger={setpop}>
      <div>
        <img src={image} alt="" />
        <div className="popdiv">
        <h3>Eforiro mummy's dish</h3>
        <h4>price : ₦2500</h4>
        </div>
        <div className="addone">
          <div className="addone1">
            <h4>-</h4>
            <h4>1</h4>
            <h4>+</h4>
          </div>
          <button>Add item to my order</button>
        </div>
        </div>
      </Orderfood>
      <main>
        <div className="food">
        <section className="food1">
            <div>
              <img src={image} alt="" className="im"/>
            </div>
            <div className="food1-col-1">
              <div>
                <h1>Eforiro mummy's dish</h1>
              </div>
              <div>
                <div className="divbut">
                <button>Delivery</button>
                <button >Pickup</button>
                </div>
              </div>
              </div>
            <div className="food1-col-2">
              <div>
                <h3 style={{color:"rgba(207, 3, 3, 0.5)"}}>Price : ₦2500</h3>
              </div>
              <div>
                <button  onClick={() => setpop(true)} style={{backgroundColor:'green',color:'#fff', padding:'10px 20px'}}>Order</button>
              </div>
            </div>
        </section>
        <section className="food2">
          <img
            src={
              "https://www.chowdeck.com/store/_next/image?url=%2Fstore%2Fempty-cart.png&w=256&q=75"
            }
          />
          <p>
            Your cart is empty.
            <br />
            Add items to get started
          </p>
        </section>
        </div>
      </main>        
      </body>
  );
};

export default Pops;
