import React from 'react'
import burger from '../../Images/burger_chips.jpg'
import variety from '../../Images/varieties.jpg'
import delivery from '../../Images/deliver.webp'
import './carousel.css'

const Carousel = () => {
  return (
    <>
<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <h2>Explore categories</h2>
      <img src={variety} class="d-block w-100 mx-auto" alt="..."/>
    </div>
    <div class="carousel-item">
        <h2>Place your orders</h2>
      <img src={burger} class="d-block w-100 mx-auto" alt="..."/>
    </div>
    <div class="carousel-item">
        <h2>Enjoy your meal</h2>
      <img src={delivery} class="d-block w-100 mx-auto" alt="..."/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className="covered">
  <div>
    <h1>Chowchow has your covered</h1>
  </div>

  <div>
    <p>
    Hungry? Too tired to cook? Have friends 
    over, or do you simply need to chop life? 
    Download Chowdeck, and let’s deliver 
    happiness to your doorstep in minutes.
    </p>
  </div>
</div>

<section className='google_map'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1014756.9316420186!2d2.87745213301642!3d6.535035957070924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf2bae227550d%3A0xe771ad7f1bbe89d6!2sLagos!5e0!3m2!1sen!2sng!4v1716384429306!5m2!1sen!2sng" 
width="600" 
height="500" 
style={{ border: "0" }} 
allowfullscreen="" 
loading="lazy" 
referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>

<div className="street_credit">
  <button>Street Cred</button>
  <div>
  <a href=""> <i className="icofont-twitter"></i>  Join our community</a>
  </div>
</div>

<div className="story">
    <div>
      <h1>Stories</h1>
    </div>
  
    
    <div class="card-group">
      <div class="card mx-2">
      <img src={variety} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">CHOWDECK SECURES $2.5 MILLION 
        SEED FUNDING TO OPTIMIZE ON-DEMAND FOOD 
        DELIVERY IN NIGERIA</h5>
        <p class="card-text">
        We have secured $2.5 million in seed funding to 
        optimize our operations and support expansion 
        into more cities
        </p>
      </div>

      <div class="card-footer">
      <small class="text-body-secondary">Read more</small>
      </div>
      </div>

      <div class="card mx-2">
      <img src={variety} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">THE ECOSYSTEM MEETS KFC</h5>
        <p class="card-text">
        We're thrilled to welcome KFC to our ever-evolving ecosystem!
        </p>
      </div>
      <div class="card-footer">
      <small class="text-body-secondary">Read more</small>
      </div>
      </div>

    <div class="card mx-2">
      <img src={variety} class="card-img-top" alt="..."/>
      <div class="card-body">
      <h5 class="card-title">INTRODUCING RELAY BY CHOWDECK - 
      A GAME CHANGER FOR LOGISTICS NATIONWIDE!</h5>
      <p class="card-text">
      We're thrilled to introduce you to Relay, here 
      to help you send and receive packages with ease!
      </p>
      </div>
      <div class="card-footer">
      <small class="text-body-secondary">Read more</small>
      </div>
    </div>

</div>

</div>

    </>
  )
}

export default Carousel;