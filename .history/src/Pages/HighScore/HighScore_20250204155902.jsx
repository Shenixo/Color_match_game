import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { listenForScoreUpdates } from "../../Components/Card/Card";
import Title from "../../Components/Title/Title";
import celebration_gif from "../../assets/celebration_gif.gif";
import {
  CelebrationSound,
  StopCelebrationSound,
  TabClick,
  GameThemeSound,
  StopGameThemeSound,
  IsGameThemePlaying
} from "../../Components/Sound/Sound"; 
import "./HighScore.css";
import Tab from "../../Components/Tab/Tab";

const HighScore = () => {
  const [viewHighScore, setViewHighScore] = useState(false);
  const location = useLocation();
  const [wasGameThemePlaying, setWasGameThemePlaying] = useState(false);

  const handleViewHighScore = () => {
    setViewHighScore((pv) => !pv);
    TabClick();
    CelebrationSound();
  };

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
    // Check if the game theme was playing before entering high_score
    setWasGameThemePlaying(IsGameThemePlaying());

    // Stop the game theme when entering high_score
    StopGameThemeSound();

    return () => {
      StopCelebrationSound(); // Stop celebration sound when leaving

      // Resume game theme only if it was playing before
      if (wasGameThemePlaying) {
        GameThemeSound();
      }
    };
  }, [location.pathname]); // Runs when route changes

  return (
    <div className="high-score-container">
      {viewHighScore ? (
        <img
          className="celebration-gif"
          src={celebration_gif}
          alt="celebration gif"
        />
      ) : null}
      <div className="container">
        <Title content="High Score" />
        {!viewHighScore ? (
          <Tab content="Click to view" onClickTab={handleViewHighScore} />
        ) : (
          <h2 className="high_score">Your Highest score is: {highScore}</h2>
        )}
      </div>
    </div>
  );
};

export default HighScore;
