export default function Header() {
    return (
        <div className="row">
        <div className="main">
          <div className="flex-container">
            <div className="header">
              <div className="icon">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              Orders
            </div>
            <button className="clear">Clear Cart</button>
          </div>
        </div>
      </div>
    )
}