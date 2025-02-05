import {Card} from "../../Components/Card/Card"
import Title from "../../Components/Title/Title"
import "./GamePlay.css"
import ScoreNdColorBox from "../../Components/ScoreNdColorBox/ScoreNdColorBox"
const GamePlay = () => {


  return (
    <div>
      <div className="container">
        <Title content="Game" />
        <div>
        <ScoreNdColorBox/>

        </div>
        <Card/>
      </div>
    </div>
  )
}

export default GamePlay
