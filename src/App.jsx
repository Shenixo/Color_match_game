import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Rules from "./Pages/Rules/Rules";
import Sound from "./Pages/Sound/Sound";
import GamePlay from "./Pages/GamePlay/GamePlay";
import HighScore from "./Pages/HighScore/HighScore";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game_play" element={<GamePlay/>}/>
        <Route path="/rules" element={<Rules />} />
        <Route path="/sound" element={<Sound />} />
        <Route path="/high_score" element={<HighScore />} />
      </Routes>
    </div>
  );
}

export default App;
