import { useEffect, useState } from "react"
import { handleRandomCard} from "../../Components/Card/Card"
const ScoreNdColorBox = () => {
    const [randomCard, setRandomCard] = useState(null)
    useEffect(() => setRandomCard(handleRandomCard()), [])
    useState
    useEffect
  return (
    <div>
      
    </div>
  )
}

export default ScoreNdColorBox
