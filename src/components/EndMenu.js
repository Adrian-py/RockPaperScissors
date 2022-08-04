import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Variables
const possibleChoices = ["scissors", "paper", "rock", "lizard", "spock"];

const rules = {
  scissors: ["paper", "lizard"],
  paper: ["rock", "spock"],
  rock: ["scissors", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};

export default function EndMenu({
  usersChoice,
  handleRestartGame,
  handleScoreChange,
  isMobile,
}) {
  // Framer Motion variants
  let menuVariants = {
      hidden: {
        opacity: 0,
      },
      show: {
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
    },
    houseImageVariants = {
      hidden: {
        opacity: 0,
        scale: 0.75,
      },
      show: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1.5,
          delay: 2,
        },
      },
    },
    highlightsContainerVariants = {
      hidden: {},
      show: {
        opacity: 1,
        scale: 1,
        x: "-50%",
        y: "-50%",
      },
    },
    highlightsVariants = {
      hidden: {
        opacity: 0,
        scale: 0.8,
        x: "-50%",
        y: "-50%",
      },
      show: {
        opacity: 1,
        scale: 1,
        x: "-50%",
        y: "-50%",
        transition: {
          duration: 2,
          delay: 4,
        },
      },
    },
    resultVariants = {
      hidden: {
        x: "-50%",
        opacity: 0,
        scale: 0.75,
      },
      show: {
        x: "-50%",
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          delay: 4.5,
        },
      },
    };

  // Desktop only variants
  let userContainerVariants, houseContainerVariants;

  // States
  const [housesChoice, setHousesChoice] = useState("");
  const [winStatus, setWinStatus] = useState("");

  if (!isMobile) {
    userContainerVariants = {
      hidden: {
        x: 0,
      },
      show: {
        x: "-4vw",
        transition: {
          delay: 4.5,
          duration: 1,
        },
      },
    };

    houseContainerVariants = {
      hidden: {
        x: 0,
      },
      show: {
        x: "4vw",
        transition: {
          when: "afterChildren",
          delay: 1,
          duration: 1,
        },
      },
    };

    resultVariants = {
      hidden: {
        opacity: 0,
        scale: 0.75,
      },
      show: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          delay: 4.5,
        },
      },
    };
  }

  // Display choice icon
  function handleChoiceDisplay(choice) {
    return "./assets/icon-" + choice + ".svg";
  }

  // Changing border color based on choice
  function handleChoiceBorder(housesChoice) {
    document
      .querySelector(".choice__image--user")
      .classList.add("choice__image--" + usersChoice);
    document
      .querySelector(".choice__image--house")
      .classList.add("choice__image--" + housesChoice);
  }

  function handleGenerateHouseChoice() {
    let generatedChoice = possibleChoices[Math.floor(Math.random() * 5)];
    setHousesChoice(generatedChoice);
    handleChoiceBorder(generatedChoice);
    handleDetermineWinner(generatedChoice);
  }

  function handleDetermineWinner(houseChoice) {
    if (houseChoice === usersChoice) {
      setWinStatus("IT'S A DRAW");
      return;
    }
    if (rules[usersChoice].includes(houseChoice)) {
      setWinStatus("YOU WIN");
      handleScoreChange(1);
      return;
    }
    setWinStatus("YOU LOSE");
    handleScoreChange(-1);
  }

  useEffect(() => {
    (() => {
      handleGenerateHouseChoice();
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <motion.div
      className="menu__end"
      variants={menuVariants}
      initial={"hidden"}
      animate={"show"}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="choice choice--user"
        variants={userContainerVariants}
      >
        <p className="choice__text">YOU PICKED</p>

        <div className="choice__image choice__image--user">
          {winStatus === "YOU WIN" ? (
            <motion.div
              className="highlights"
              variants={highlightsContainerVariants}
              initial={"hidden"}
              animate={"show"}
            >
              <motion.div
                className="highlights__highlight highlights__highlight--one"
                variants={highlightsVariants}
              ></motion.div>
              <motion.div
                className="highlights__highlight highlights__highlight--two"
                variants={highlightsVariants}
              ></motion.div>
              <motion.div
                className="highlights__highlight highlights__highlight--three"
                variants={highlightsVariants}
              ></motion.div>
            </motion.div>
          ) : null}
          <img
            src={handleChoiceDisplay(usersChoice)}
            alt=""
            className="choice__icon"
          />
        </div>
      </motion.div>

      <motion.div
        className="result"
        variants={resultVariants}
        initial={"hidden"}
        animate={"show"}
      >
        <h2 className="result__title">{winStatus}</h2>
        <button className="result__button" onClick={handleRestartGame}>
          PLAY AGAIN
        </button>
      </motion.div>

      <motion.div
        className="choice choice--house"
        variants={houseContainerVariants}
        initial={"hidden"}
        animate={"show"}
      >
        <p className="choice__text">THE HOUSE PICKED</p>
        <motion.div
          className="choice__image choice__image--house"
          variants={houseImageVariants}
        >
          <img
            src={handleChoiceDisplay(housesChoice)}
            alt=""
            className="choice__icon"
          />
        </motion.div>
        <div className="choice__empty"></div>
        {winStatus === "YOU LOSE" ? (
          <motion.div
            className="highlights"
            variants={highlightsContainerVariants}
            initial={"hidden"}
            animate={"show"}
          >
            <motion.div
              className="highlights__highlight highlights__highlight--one"
              variants={highlightsVariants}
            ></motion.div>
            <motion.div
              className="highlights__highlight highlights__highlight--two"
              variants={highlightsVariants}
            ></motion.div>
            <motion.div
              className="highlights__highlight highlights__highlight--three"
              variants={highlightsVariants}
            ></motion.div>
          </motion.div>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
