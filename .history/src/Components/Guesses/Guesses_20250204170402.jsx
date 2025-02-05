import "./Guesses.css";
import { listenForIsCorrectUpdates } from "../Card/Card";
import { useEffect, useState } from "react";

const Guesses = () => {
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    listenForIsCorrectUpdates((value) => {
      setIsCorrect(value);

      setTimeout(() => {
        setIsCorrect(null);
      }, 2000);
    });
  }, []);

  return (
    <div style={{background: isCorrect ? ""}} className={`guesses ${isCorrect !== null ? "guesses_display" : ""}`}>
      {isCorrect === true && <h3>Correct Guess ✅</h3>}
      {isCorrect === false && <h3>Wrong Guess ❌</h3>}
    </div>
  );
};

export default Guesses;
