import { Card, listenForScoreUpdates } from "../../Components/Card/Card"; 
import Title from "../../Components/Title/Title";
import "./GamePlay.css";
import ScoreNdColorBox from "../../Components/ScoreNdColorBox/ScoreNdColorBox";
import { useEffect, useState } from "react";

const GamePlay = () => {
  const [score, setScore] = useState(() => parseInt(localStorage.getItem("score")) || 0); // Load latest score initially

  useEffect(() => {
    listenForScoreUpdates(setScore);
  }, []);

  return (
    <div>
      <div className="container">
        <Title content={`Game Score: ${score}`} />
        <Card />
        <div className="game-tab">
          <ScoreNdColorBox />
        </div>
      </div>
    </div>
  );
};

export default GamePlay;
