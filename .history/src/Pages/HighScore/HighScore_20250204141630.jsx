import { useEffect, useState } from "react";
import {  listenForScoreUpdates } from "../../Components/Card/Card"; 
const HighScore = () => {
    const [score, setScore] = useState(() => parseInt(localStorage.getItem("score")) || 0); 
     useEffect(() => {
        listenForScoreUpdates(setScore);
     }, []);
    const [highScore, setHighScore] = useState(0)
    const handleHighScore = () => {
       if (highScore < )
    }
    return (
    <div>
      
    </div>
  )
}

export default HighScore
