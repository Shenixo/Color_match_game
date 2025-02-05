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

const Card = () => {
  const cardArr = Array.from({ length: 6 });
  const [animationStage, setAnimationStage] = useState("chosen");
  const [shuffledColors, setShuffledColors] = useState([...fineColors]);
  const [localScore, setLocalScore] = useState(score);
  const [chosenColor, setChosenColor] = useState(null);
  const [clickEnabled, setClickEnabled] = useState(false);
  const [showHint, setShowHint] = useState(true); // Controls whether the chosen card is visually highlighted

  useEffect(() => {
    startNewRound();
  }, []);

  const startNewRound = () => {
    setAnimationStage("chosen");
    setClickEnabled(false);
    setShowHint(true); 

    const randomColor = fineColors[Math.floor(Math.random() * fineColors.length)];
    setChosenColor(randomColor);

    setTimeout(() => setAnimationStage("collapse"), 4000);
    setTimeout(() => {
      const shuffled = [...fineColors].sort(() => Math.random() - 0.5);
      setShuffledColors(shuffled);
      setAnimationStage("spread");
      setClickEnabled(true);
      setShowHint(false); // Hide hint after shuffling
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

    const clickedColor = shuffledColors[clickedIndex];

    if (clickedColor === chosenColor) {
      handleWinState();
    } else {
      handleLoseState();
    }

    TabClick();
    setClickEnabled(false);

    setTimeout(() => {
      startNewRound();
    }, 1000);
  };

  return (
    <div className={`card ${animationStage}`}>
      {cardArr.map((_, idx) => (
        <button
          onClick={() => handleCheckPlayerClick(idx)}
          className={showHint && shuffledColors[idx] === chosenColor ? "chosen_card" : ""}
          style={{ background: shuffledColors[idx] }}
          key={idx}
          disabled={!clickEnabled}
        />
      ))}
      <p>Score: {localScore}</p>
    </div>
  );
};

export { Card, setGlobalScore };

export const listenForScoreUpdates = (callback) => {
  document.addEventListener("scoreUpdated", (event) => {
    callback(event.detail);
  });
};
