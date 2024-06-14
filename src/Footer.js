import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import logo from './Creative-Digita-Technologies-Logo-new.png'
function Footer() {
  return (
    <>
    <footer>
    <div className="footerTop">
    <img src={logo} alt="" />
    <div className="topRight">
      <div className="locate">
        <h2>Locations</h2>
        <ul>
          <li><Link>Unilag</Link></li>
          <li><Link>Alagomeji</Link></li>
          <li><Link>Fola Agoro</Link></li>
          <li><Link>Ibadan 1</Link></li>
          <li><Link>Ibadan 2</Link></li>
          <li><Link>Apo</Link></li>
        </ul>
      </div>
      <div className="Download">
        <h2>Download</h2>
        <ul>
          <li><Link to={"https://play.google.com/store/apps/details?id=com.chowdeck.com"}>Google Play Store</Link></li>
          <li><Link to={"https://apps.apple.com/us/app/chowdeck/id1530676376"}>iOS App Store</Link></li>
        </ul>
      </div>
      <div className="Help">
        <h2>Get Help</h2>
        <ul>
          <li><Link to="mailto:hello@chowdeck.com">Email</Link></li>
          {/* <li><Link></Link></li> */}
        </ul>
      </div>
    </div>
      </div>
    <div className="footerBottom">
      <hr />
      <div className="bottomleft">
        <span>&copy; 2022, <Link>Chowdeck</Link></span>
      </div>
    </div>
    </footer>
    </>
  )
}

export default Footer