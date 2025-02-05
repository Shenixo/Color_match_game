import {Card, listenForScoreUpdates } from "../../Components/Card/Card"
import Title from "../../Components/Title/Title"
import "./GamePlay.css"
import ScoreNdColorBox from "../../Components/ScoreNdColorBox/ScoreNdColorBox"
import { useEffect } from "react"

const GamePlay = () => {
  const [score, setScore] = useState(0);
  uses
  useEffect(() => {
    listenForScoreUpdates(setScore);
  }, []);
  return (
    <div>
      <div className="container">
        <Title content="Game" />
        <div className="game-tab">
        <ScoreNdColorBox/>
        </div>
        <Card/>
      </div>
    </div>
  )
}

export default GamePlay
