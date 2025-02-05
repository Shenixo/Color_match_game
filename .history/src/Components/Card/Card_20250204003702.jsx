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
  const [shuffledColors, setShuffledColors] = useState(fineColors);
  const [localScore, setLocalScore] = useState(score);
  const [originalColor, setOriginalColor] = useState(""); // Store chosen color
  const [correctIndex, setCorrectIndex] = useState(null); // Correct index after shuffle
  const [clickEnabled, setClickEnabled] = useState(false);

  useEffect(() => {
    startNewRound();
  }, []);

  const startNewRound = () => {
    setAnimationStage("chosen");
    setClickEnabled(false);

    // Step 1: Pick a random color **before shuffle**
    const selectedColor = fineColors[Math.floor(Math.random() * 6)];
    setOriginalColor(selectedColor);

    setTimeout(() => setAnimationStage("collapse"), 4000);
    setTimeout(() => {
      // Step 2: Shuffle colors
      const shuffled = [...fineColors].sort(() => Math.random() - 0.5);
      setShuffledColors(shuffled);

      // Step 3: Find new index of selected color in shuffled array
      const newIndex = shuffled.indexOf(selectedColor);
      setCorrectIndex(newIndex);

      setAnimationStage("spread");
      setClickEnabled(true);
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

    if (clickedIndex === correctIndex) {
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
          className={idx === correctIndex ? "chosen_card" : ""}
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
