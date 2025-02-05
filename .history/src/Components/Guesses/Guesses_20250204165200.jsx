import "./Guesses.css"
import { listenForIsCorrectUpdates } from "../Card/Card"
import { useEffect, useState } from "react"

const Guesses = () => {
    const [isCorrect, setIsCorrect] = useState(null)
    useEffect(() => {
        listenForIsCorrectUpdates()
    }, [])
  return (
    <div className="guesses">
      <h3>Correct Guess</h3>
    </div>
  )
}

export default Guesses
