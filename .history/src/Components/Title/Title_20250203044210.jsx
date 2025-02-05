import "./Title.css"
import brain from "../../assets/brain.png"
const Title = () => {
  return (
    <div className="title">
          <h1>Color Match Game</h1>
          <img src={brain} alt="Brain image" width={20} />
    </div>
  )
}

export default Title
