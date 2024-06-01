import "./App.css";
import myImg from "./image/food-1.jpeg";
import myImg1 from "./image/image-2.jpeg";
import myImg2 from "./image/image-3.jpeg";
import Header from "./components/Header";
import ToggleButton from "./components/ToggleButton";
import Checkout from "./components/Checkout";
import PayStack from "./components/PayStack";
import { useState } from "react";

function App() {
  const [openModal, setOpenmodal] = useState(false);
  function onOpenModal() {
    setOpenmodal((m) => !m);
  }

  return (
    <>
      <Header />
      <ToggleButton />

      <div className="row">
        <div className="each">
          <Checkout myImg={myImg} onOpenModal={onOpenModal} />
          <Checkout myImg={myImg1} onOpenModal={onOpenModal} />
          <Checkout myImg={myImg2} onOpenModal={onOpenModal} />
        </div>

        {openModal && <PayStack onClose={setOpenmodal} />}
      </div>
    </>
  );
}

export default App;
