import { useEffect, useState } from "react"
import Card from "../../Components/Card/Card"
import Title from "../../Components/Title/Title"
import "./GamePlay.css"
import {handleRandomCard} from "../../Components/Card/Card"
const GamePlay = () => {
  const [randomCard, setRandomCard] = useState(null)
  console.log("randomCard")
  useEffect(() => setRandomCard(handleRandomCard()), [])

  return (
    <div>
      <div className="container">
        <Title content="Game" />
        <div>{ randomCard}</div>
        <Card/>
      </div>
    </div>
  )
}

export default GamePlay
