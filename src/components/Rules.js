import React, { useState } from "react";

import rulesImage from "../assets/image-rules-bonus.svg";
import closeIcon from "../assets/icon-close.svg";

export default function Rules() {
  const [rulesPopupStatus, setRulesPopupStatus] = useState(false);

  function handleRulesPopup() {
    const popup = document.getElementById("popup");
    if (!rulesPopupStatus) popup.classList.remove("hidden");
    else popup.classList.add("hidden");
    setRulesPopupStatus(!rulesPopupStatus);
  }

  return (
    <div className="rules">
      <button className="rules__button" onClick={handleRulesPopup}>
        RULES
      </button>
      <div className="popup hidden" id="popup">
        <div className="popup__content">
          <div className="popup__header">
            <h2 className="popup__title">RULES</h2>
            <img
              src={closeIcon}
              alt=""
              className="popup__close"
              onClick={handleRulesPopup}
            />
          </div>
          <img
            src={rulesImage}
            alt="Game Rules Explanation"
            className="popup__rules"
          />
        </div>
        <div className="popup__overlay" onClick={handleRulesPopup}></div>
      </div>
    </div>
  );
}
