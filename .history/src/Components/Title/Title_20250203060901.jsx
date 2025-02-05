/* eslint-disable react/prop-types */
import "./Title.css"
import brain from "../../assets/brain.png"
import { Link } from "react-router-dom"
const Title = ({content}) => {
  return (
    <div className="title">
          <h1>{content}</h1>
          <Link>
          </Link>
          <img src={brain} alt="Brain image" width={80} />
    </div>
  )
}

export default Title
