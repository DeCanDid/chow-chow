export default function checkout({ myImg, onOpenModal }) {
  return (
    <div className="check">
      <div className="item-bought">
        <div className="item">
          <div className="image">
            <img src={myImg} alt="food" />
          </div>
          <p>
            Mainland restaurant...
            <br></br> <span>1 item #6,500</span>
          </p>
        </div>

        <p>
          view selection <ion-icon name="chevron-down-outline"></ion-icon>
        </p>
      </div>
      <div>
        <div className="address">
          <div>
            <ion-icon name="home-outline"></ion-icon>
          </div>
          <p>Delivering to plot 555,wuye, Utako federal capital territory,</p>
        </div>
      </div>
      <button type="submit" className="checkout" onClick={onOpenModal}>
        check out
      </button>
      <button type="submit" className="clear-select">
        clear selection
      </button>
    </div>
  );
}
