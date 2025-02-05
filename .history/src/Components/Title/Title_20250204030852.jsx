/* eslint-disable react/prop-types */
import "./Title.css"
import brain from "../../assets/brain.png"
import { Link } from "react-router-dom"
import { TabClick } from "../../Components/Sound/Sound";
import ChosenColor from "../../Components/ChosenColorDisplay/ChosenColorDisplay";

const Title = ({content}) => {
  return (
    <div className="title">
      <h1>{content}</h1>
      <div className="image-div">
        
      </div>
      <ChosenColor/>
          <Link to="/">
          <img src={brain} onClick={TabClick} alt="Brain image" width={80} />
          </Link>
    </div>
  )
}

export default Title
