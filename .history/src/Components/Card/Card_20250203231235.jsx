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

const randomNum = Math.floor(Math.random() * 6);
const handleRandomCard = () => fineColors[randomNum];

const cardRan = handleRandomCard();
console.log("cardRan", cardRan);

const Card = () => {
  const cardArr = Array.from({ length: 6 });
  const [animationStage, setAnimationStage] = useState("chosen");
  const [shuffledColors, setShuffledColors] = useState([...fineColors]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimationStage("collapse"), 4000);
    setTimeout(() => {
      setShuffledColors([...fineColors].sort(() => Math.random() - 0.5));
      setAnimationStage("spread");
    }, 6000);
  }, []);

  const updateScore = (newScore) => {
    setScore(newScore);
    document.dispatchEvent(new CustomEvent("scoreUpdated", { detail: newScore }));
  };

  const handleWinState = () => {
    setScore((prev) => {
      const newScore = prev + 1;
      document.dispatchEvent(new CustomEvent("scoreUpdated", { detail: newScore }));
      return newScore;
    });
  };

  const handleLoseState = () => {
    setScore((prev) => {
      const newScore = prev - 1;
      document.dispatchEvent(new CustomEvent("scoreUpdated", { detail: newScore }));
      return newScore;
    });
  };

  const handleCheckPlayerClick = (clickedIndex) => {
    if (clickedIndex === randomNum) handleWinState();
    else handleLoseState();
    TabClick();
  };

  return (
    <div className={`card ${animationStage}`}>
      {cardArr.map((_, idx) => (
        <div
          onClick={() => handleCheckPlayerClick(idx)}
          className={cardRan === fineColors[idx] ? "chosen_card" : ""}
          style={{ background: shuffledColors[idx] }}
          key={idx}
        />
      ))}
      <p>Score: {score}</p> {/* Live score display */}
    </div>
  );
};

// Exporting functions and event listener setup
export { Card, handleRandomCard, handleLoseState, handleWinState };

// Function to listen for score changes (Use this in another component)
export const listenForScoreUpdates = (callback) => {
  document.addEventListener("scoreUpdated", (event) => {
    callback(event.detail);
  });
};
