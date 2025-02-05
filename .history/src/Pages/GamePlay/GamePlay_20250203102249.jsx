import { useState } from "react"
import Card from "../../Components/Card/Card"
import Title from "../../Components/Title/Title"
import "./GamePlay.css"
import {}
const GamePlay = () => {
  const [randomCard, setRandomCard] = useState(null)

  return (
    <div>
      <div className="container">
        <Title content="Game" />
        
        <Card/>
      </div>
    </div>
  )
}

export default GamePlay
