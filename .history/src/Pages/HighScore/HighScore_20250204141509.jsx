import { useEffect, useState } from "react";
import {  listenForScoreUpdates } from "../../Components/Card/Card"; 
const HighScore = () => {
    const [score, setScore] = useState(() => parseInt(localStorage.getItem("score")) || 0); 
     useEffect(() => {
        listenForScoreUpdates(setScore);
     }, []);
    const handleHigh
    return (
    <div>
      
    </div>
  )
}

export default HighScore
