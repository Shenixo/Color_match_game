/* eslint-disable react/prop-types */
import "./Title.css"
import brain from "../../assets/brain.png"
const Title = ({content}) => {
  return (
    <div className="title">
          <h1>{content}</h1>
          <Link
          <img src={brain} alt="Brain image" width={80} />
    </div>
  )
}

export default Title
