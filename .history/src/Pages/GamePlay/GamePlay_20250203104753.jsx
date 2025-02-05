import { useEffect, useState } from "react"
import {Card} from "../../Components/Card/Card"
import Title from "../../Components/Title/Title"
import "./GamePlay.css"
import ScoreNdColorBox from "../../Components/ScoreNdColorBox/ScoreNdColorBox"
const GamePlay = () => {


  return (
    <div>
      <div className="container">
        <Title content="Game" />
        <ScoreNdColorBox/>
        <Card/>
      </div>
    </div>
  )
}

export default GamePlay
