import { useState, useEffect } from "react";
import "./Card.css";
import { TabClick } from "../../Components/Sound/Sound";

const fineColors = [
  "#2E86AB",
  "#FF6F61",
  "#50C878",
  "#B2A4D4",
  "#FFD700",
  "#FF69B4",
];

let score = 0;
const setGlobalScore = (newScore) => {
  score = newScore;
  document.dispatchEvent(new CustomEvent("scoreUpdated", { detail: score }));
};

const handleRandomCard = () => {
  return fineColors[Math.floor(Math.random() * fineColors.length)];
};

const Card = () => {
  const cardArr = Array.from({ length: 6 });
  const [animationStage, setAnimationStage] = useState("chosen");
  const [shuffledColors, setShuffledColors] = useState([...fineColors]);
  const [localScore, setLocalScore] = useState(score);
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 6));
  const [clickEnabled, setClickEnabled] = useState(false);

  useEffect(() => {
    startNewRound();
  }, []);

  const startNewRound = () => {
    setAnimationStage("chosen");
    setClickEnabled(false); // Disable clicks

    setTimeout(() => setAnimationStage("collapse"), 4000);
    setTimeout(() => {
      setShuffledColors([...fineColors].sort(() => Math.random() - 0.5));
      setAnimationStage("spread");
      setClickEnabled(true); // Enable clicks after shuffling
    }, 6000);
  };

  const handleWinState = () => {
    setLocalScore((prev) => {
      const newScore = prev + 1;
      setGlobalScore(newScore);
      return newScore;
    });
  };

  const handleLoseState = () => {
    setLocalScore((prev) => {
      const newScore = prev - 1;
      setGlobalScore(newScore);
      return newScore;
    });
  };

  const handleCheckPlayerClick = (clickedIndex) => {
    if (!clickEnabled) return;

    if (clickedIndex === randomNum) {
      handleWinState();
    } else {
      handleLoseState();
    }

    TabClick();
    setClickEnabled(false); 

    setTimeout(() => {
      setRandomNum(Math.floor(Math.random() * 6)); 
      startNewRound();
    }, 1000);
  };

  return (
    <div className={`card ${animationStage}`}>
      {cardArr.map((_, idx) => (
        <div
          onClick={() => handleCheckPlayerClick(idx)}
          className={randomNum === idx ? "chosen_card" : ""}
          style={{ background: shuffledColors[idx] }}
          key={idx}
        />
      ))}
      <p>Score: {localScore}</p>
    </div>
  );
};

export { Card, setGlobalScore, handleRandomCard };

export const listenForScoreUpdates = (callback) => {
  document.addEventListener("scoreUpdated", (event) => {
    callback(event.detail);
  });
};
