import { useEffect, useState } from "react"
import {Card, handleRandomCard} from "../../Components/Card/Card"
import Title from "../../Components/Title/Title"
import "./GamePlay.css"
const GamePlay = () => {


  return (
    <div>
      <div className="container">
        <Title content="Game" />
        <div> randomCard</div>
        <Score
        <Card/>
      </div>
    </div>
  )
}

export default GamePlay
