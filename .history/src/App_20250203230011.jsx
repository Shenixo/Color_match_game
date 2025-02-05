import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Rules from "./Pages/Rules/Rules";
import Sound from "./Pages/Sound/Sound";
import GamePlay from "./Pages/GamePlay/GamePlay";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0)
  const handleWinState = () => {
    setScore(prev => prev + 1)
  };
  const handleLoseState = () => {
    setScore(prev => prev - 1)
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game_play" element={<GamePlay/>}/>
        <Route path="/rules" element={<Rules />} />
        <Route path="/sound" element={<Sound />} />
      </Routes>
    </div>
  );
}

export default App;
