import { useState } from "react";


const HighScore = () => {
    const [score, setScore] = useState(() => parseInt(localStorage.getItem("score")) || 0); 
  useState
    return (
    <div>
      
    </div>
  )
}

export default HighScore
