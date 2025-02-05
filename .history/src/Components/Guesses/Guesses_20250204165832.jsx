import "./Guesses.css";
import { listenForIsCorrectUpdates } from "../Card/Card";
import { useEffect, useState } from "react";

const Guesses = () => {
  const [isCorrect, setIsCorrect] = useState(null);
  useEffect(() => {
    listenForIsCorrectUpdates(setIsCorrect);
  }, []);
  return (
    <div className={`guesses ${false ? "guesses_display" : ""}`}>
      {isCorrect ? <h3>Correct Guess ✅</h3> : <h3>Wrong Guess ❌</h3>}
    </div>
  );
};

export default Guesses;
