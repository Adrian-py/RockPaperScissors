import React from "react";

import gameLogo from "../assets/logo-bonus.svg";

export default function Header({ currentScore }) {
  return (
    <header className="header">
      <img src={gameLogo} alt="" className="header__logo" />
      <h1 className="title out">Rock Paper Scissors Lizard Spock</h1>
      <div className="score">
        <h2 className="score__title">SCORE</h2>
        <p className="score__text">{currentScore}</p>
      </div>
    </header>
  );
}
