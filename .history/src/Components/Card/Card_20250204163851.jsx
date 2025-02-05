import { useState, useEffect } from "react";
import "./Card.css";
import { TabClick } from "../../Components/Sound/Sound";
import win_sound from "../../assets/win.wav";
import lose_sound from "../../assets/lose.wav";

const fineColors = [
  "#2E86AB",
  "#FF6F61",
  "#50C878",
  "#B2A4D4",
  "#FFD700",
  "#FF69B4",
];

let score = parseInt(localStorage.getItem("score")) || 0; 

const setGlobalScore = (newScore) => {
  score = newScore;
  localStorage.setItem("score", score);
  document.dispatchEvent(new CustomEvent("scoreUpdated", { detail: score }));
};

const playSound = (sound) => {
  const audio = new Audio(sound);
  audio.play();
};

const Card = () => {
  const cardArr = Array.from({ length: 6 });
  const [shuffledColors, setShuffledColors] = useState([...fineColors]);
  const [localScore, setLocalScore] = useState(score);
  const [chosenColor, setChosenColor] = useState(null);
  const [clickEnabled, setClickEnabled] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [isCorrect, setIsCorrect] = useState(null)

  useEffect(() => {
    startNewRound();
  }, []);

  const startNewRound = () => {
    setClickEnabled(false);
    setShowHint(true);

    const randomColor = fineColors[Math.floor(Math.random() * fineColors.length)];
    setChosenColor(randomColor);

    document.dispatchEvent(new CustomEvent("colorChosen", { detail: randomColor }));

    setTimeout(() => {
      const shuffled = [...fineColors].sort(() => Math.random() - 0.5);
      setShuffledColors(shuffled);
      setClickEnabled(true);
      setShowHint(false);
    }, 4000);
  };

  const handleWinState = () => {
    playSound(win_sound);
    setLocalScore((prev) => {
      const newScore = prev + 1;
      setGlobalScore(newScore);
      setIsCorrect(true)
      return newScore;
    });
  };

  const handleLoseState = () => {
    playSound(lose_sound);
    setLocalScore((prev) => {
      const newScore = prev - 1;
      setGlobalScore(newScore);
      setIsCorrect(false)
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

  let isCorrectGlobal = null
  const setIsCorrectGlobal = (value) => {
    isCorrectGlobal = value
    document.dispatchEvent(new CustomEvent("isCorrectUpdated", { detail: isCorrectGlobal }))
  }



  return (
    <div className="card">
      {cardArr.map((_, idx) => (
        <button
          onClick={() => handleCheckPlayerClick(idx)}
          className={showHint && shuffledColors[idx] === chosenColor ? "chosen_card" : ""}
          style={{ background: shuffledColors[idx] }}
          key={idx}
          disabled={!clickEnabled}
        />
      ))}
    </div>
  );
};

export { Card, setGlobalScore };

export const listenForScoreUpdates = (callback) => {
  document.addEventListener("scoreUpdated", (event) => {
    callback(event.detail);
  });
};

export const listenForIsCorrectUpdates = (call)
