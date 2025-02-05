import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Rules from "./Pages/Rules/Rules";
import SOUND from "./Pages/SOUND/SOUND";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </div>
  );
}

export default App;
