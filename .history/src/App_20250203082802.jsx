import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Rules from "./Pages/Rules/Rules";
import Sound from "./Pages/Sound/Sound";
import { GameTheme } from "../src/Components/Sound/Sound";
import { useEffect } from "react";
import {jj} from "../src/Components/Sound/Sound"
function App() {
  useEffect(() => GameTheme(), []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/sound" element={<Sound />} />
      </Routes>
    </div>
  );
}

export default App;
