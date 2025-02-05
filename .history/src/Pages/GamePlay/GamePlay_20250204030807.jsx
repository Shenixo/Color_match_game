import { Card, listenForScoreUpdates } from "../../Components/Card/Card";
import Title from "../../Components/Title/Title";
import "./GamePlay.css";
import ScoreNdColorBox from "../../Components/ScoreNdColorBox/ScoreNdColorBox";
import { useEffect, useState } from "react";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  useEffect(() => {
    listenForScoreUpdates(setScore);
  }, []);
  return (
    <div>
      <div className="container">
        <Title content={`Game:${score}`} />
        <div className="game-tab">
          <ScoreNdColorBox />
        </div>
        <Card />
      </div>
    </div>
  );
};

export default GamePlay;
