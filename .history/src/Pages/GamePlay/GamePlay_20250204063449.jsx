import { Card, listenForScoreUpdates } from "../../Components/Card/Card"; 
import Title from "../../Components/Title/Title";
import "./GamePlay.css";
import Hint from "../../Components/Hint/Hint";
import { useEffect, useState } from "react";

const GamePlay = () => {
  const [score, setScore] = useState(() => parseInt(localStorage.getItem("score")) || 0); 

  useEffect(() => {
    listenForScoreUpdates(setScore);
  }, []);

  return (
    <div>
      <div className="container">
        <Title content={`Game Score:${score}`} />
        <Card />
        <div className="game-tab">
          <Hint />
        </div>
      </div>
    </div>
  );
};

export default GamePlay;
