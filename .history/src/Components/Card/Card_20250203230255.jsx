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
  const [score, setScore] = useState(0)

  useEffect(() => {
    setTimeout(() => setAnimationStage("collapse"), 4000);

    setTimeout(() => {
      setShuffledColors([...fineColors].sort(() => Math.random() - 0.5));
      setAnimationStage("spread");
    }, 6000);
  }, []);
  const handleWinState = () => {
    setScore(prev => prev + 1)
    return score
  };
  const handleLoseState = () => {
    setScore(prev => prev - 1)
  };
  const handleCheckPlayerClick = (clickedIndex) => {
    if (clickedIndex === randomNum) handleWinState();
    else {
      handleLoseState();
    }
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
    </div>
  );
};

export { Card, handleRandomCard };
