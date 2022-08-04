import React from "react";
import { motion } from "framer-motion";

import pentagonBg from "../assets/bg-pentagon.svg";

const menuVariants = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function StartMenu({ handleStartGame }) {
  function handleChoosingOption(e) {
    handleStartGame(e.currentTarget.dataset.option);
    document.querySelector(".menu__start").classList.add("hidden");
  }

  return (
    <motion.div
      className="menu__start"
      variants={menuVariants}
      initial={"initial"}
      animate={"show"}
    >
      <img src={pentagonBg} alt="Game Background" className="background" />
      <div className="options">
        <div
          onClick={handleChoosingOption}
          data-option="lizard"
          className="option option--lizard"
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/icon-lizard.svg"}
            alt="Lizard Icon"
            className="option__icon option__icon--lizard"
          />
        </div>
        <div
          onClick={handleChoosingOption}
          data-option="paper"
          className="option option--paper"
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/icon-paper.svg"}
            alt="Paper Icon"
            className="option__icon option__icon--paper"
          />
        </div>
        <div
          onClick={handleChoosingOption}
          data-option="rock"
          className="option option--rock"
        >
          a
          <img
            src={process.env.PUBLIC_URL + "/assets/icon-rock.svg"}
            alt="Rock Icon"
            className="option__icon option__icon--rock"
          />
        </div>
        <div
          onClick={handleChoosingOption}
          data-option="scissors"
          className="option option--scissors"
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/icon-scissors.svg"}
            alt="Scissors Icon"
            className="option__icon option__icon--scissors"
          />
        </div>
        <div
          onClick={handleChoosingOption}
          data-option="spock"
          className="option option--spock"
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/icon-spock.svg"}
            alt="Spock Icon"
            className="option__icon option__icon--spock"
          />
        </div>
      </div>
    </motion.div>
  );
}
