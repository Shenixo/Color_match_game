import { useEffect, useState } from "react";
import { listenForScoreUpdates } from "../../Components/Card/Card";
import Title from "../../Components/Title/Title";
import "./HighScore.css";
const HighScore = () => {
  const [score, setScore] = useState(
    () => parseInt(localStorage.getItem("score")) || 0
  );
  useEffect(() => {
    listenForScoreUpdates(setScore);
  }, []);
  const [highScore, setHighScore] = useState(parseInt(localStorage.getItem("high_score")));
  useEffect(() => {
    const handleHighScore = () => {
      if (highScore < score) {
        const newHighScore = localStorage.setItem("high_score", highScore);
        setHighScore(newHighScore);
      }
    };
    handleHighScore();
  }, [score, highScore]);
  return (
    <div className="container">
      <Title content="High Score" />
      <h2 className="high_score">Your Highest score is: {highScore}</h2>
    </div>
  );
};

export default HighScore;
