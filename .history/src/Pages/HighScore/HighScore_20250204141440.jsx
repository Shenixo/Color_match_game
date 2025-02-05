import { useEffect, useState } from "react";
const HighScore = () => {
    const [score, setScore] = useState(() => parseInt(localStorage.getItem("score")) || 0); 
     useEffect(() => {
        listenForScoreUpdates(setScore);
      }, []);
    return (
    <div>
      
    </div>
  )
}

export default HighScore
