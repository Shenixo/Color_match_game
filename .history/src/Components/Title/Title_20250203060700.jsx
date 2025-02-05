import "./Title.css"
import brain from "../../assets/brain.png"
const Title = ({content}) => {
  return (
    <div className="title">
          <h1>Color Match Game</h1>
          <img src={brain} alt="Brain image" width={80} />
    </div>
  )
}

export default Title
