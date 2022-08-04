import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import StartMenu from "./components/StartMenu";
import EndMenu from "./components/EndMenu";
import Rules from "./components/Rules";

import "./styling/css/style.css";

function App() {
  const [usersChoice, setUsersChoice] = useState("");
  const [currentScore, setCurrentScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function handleStartGame(userChoice) {
    setUsersChoice(userChoice);
    setGameStarted(true);
  }

  function handleRestartGame() {
    setUsersChoice("");
    setGameStarted(false);
  }

  function handleScoreChange(result) {
    setTimeout(() => {
      if (result > 0) {
        setCurrentScore(currentScore + 1);
        return;
      }
      setCurrentScore(currentScore - 1);
    }, 3500);
  }

  useEffect(() => {
    if (window.innerWidth <= 768) setIsMobile(true);
  }, []);

  return (
    <div className="App">
      <Header currentScore={currentScore} />
      <div className="menu">
        {gameStarted ? (
          <EndMenu
            usersChoice={usersChoice}
            handleRestartGame={handleRestartGame}
            handleScoreChange={handleScoreChange}
            isMobile={isMobile}
          />
        ) : (
          <StartMenu handleStartGame={handleStartGame} />
        )}
      </div>
      <Rules />
    </div>
  );
}

export default App;
