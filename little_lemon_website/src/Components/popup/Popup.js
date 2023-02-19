import React, { useState } from "react";

const Popup = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
     setShowPopup(true);
  }

  return (
    <div>
      <button className="action-button" onClick={handleButtonClick}>{props.buttonName}</button>
      {showPopup && (
        <div className='confirmation'>
            <h2>Thanks for booking with us.</h2>
            <h3>Your reservation is confirmed.</h3>
        </div>
      )}
    </div>
  );
}

export default Popup;