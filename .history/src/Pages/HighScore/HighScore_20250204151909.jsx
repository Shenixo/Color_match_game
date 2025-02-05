import { useEffect, useState } from "react";
import { listenForScoreUpdates } from "../../Components/Card/Card";
import Title from "../../Components/Title/Title";
import celebration_gif from "../../assets/celebration_gif.gif";
import { CelebrationSound } from "../../Components/Sound/Sound";
import "./HighScore.css";

const HighScore = () => {
    const [viewHighScore, setViewHighScore] = useState(false)
    const handleViewHigh
  const [score, setScore] = useState(
    () => parseInt(localStorage.getItem("score")) || 0
  );
  const [highScore, setHighScore] = useState(
    () => parseInt(localStorage.getItem("high_score")) || 0
  );

  useEffect(() => {
    listenForScoreUpdates(setScore);
  }, []);

  useEffect(() => {
    if (score > highScore) {
      localStorage.setItem("high_score", score);
      setHighScore(score);
    }
  }, [score]);
  useEffect(() => {
    CelebrationSound();
  }, []);

  return (
    <div className="high-score-container">
      <img className="celebration-gif" src={celebration_gif} alt="celebration gif" />
      <div className="container">
              <Title content="High Score" />
              
        <h2 className="high_score">Your Highest score is: {highScore}</h2>
      </div>
    </div>
  );
};

export default HighScore;
