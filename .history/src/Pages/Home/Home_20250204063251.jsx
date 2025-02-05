import { useState, useEffect } from "react";
import Tab from "../../Components/Tab/Tab";
import Title from "../../Components/Title/Title";
import "./Home.css";
import { TabClick } from "../../Components/Sound/Sound";
import { setGlobalScore, listenForScoreUpdates } from "../../Components/Card/Card";

const Home = () => {
  const [score, setScore] = useState(() => parseInt(localStorage.getItem("score")) || 0);

  useEffect(() => {
    listenForScoreUpdates(setScore);
  }, []);

  const handleReset = () => {
    localStorage.setItem("score", 0); // Reset score in localStorage
    setGlobalScore(0); // Reset global score and trigger event
    setScore(0); 
    TabClick();
  };

  return (
    <div className="home">
      <div className="container">
        <Title content="Color Match" onClickTab={TabClick} />
        <Tab content="Start Game" path="/game_play" onClickTab={TabClick} />
        <Tab content="Reset" onClickTab={handleReset} /> 
        <Tab content="Sound" path="/sound" onClickTab={TabClick} />
        <Tab content="Rules" path="/rules" onClickTab={TabClick} />
      </div>
    </div>
  );
};

export default Home;
