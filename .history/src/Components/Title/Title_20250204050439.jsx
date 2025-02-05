/* eslint-disable react/prop-types */
import "./Title.css";
import brain from "../../assets/brain.png";
import { Link } from "react-router-dom";
import { TabClick } from "../../Components/Sound/Sound";
import ChosenColor from "../../Components/ChosenColorDisplay/ChosenColorDisplay";
import { useEffect, useState } from "react";

const Title = ({ content }) => {
  const [hint, setHint] = useState(false)
  useEffect(() => {
    const handleHintUpdated = (event) => setHint(event.detail)
    document.addEventListener("hintUpdated", handleHintUpdated)
    return () => {
      document.removeEventListener("hintUpdated", handleHintUpdated)
    }
  }, [])
  return (
    <div className="title">
      <h1>{content}</h1>
      <div className="image-div">
        <ChosenColor className={`bulb-icon ${}`} />
        <Link to="/">
          <img src={brain} onClick={TabClick} alt="Brain image" width={80} />
        </Link>
      </div>
    </div>
  );
};

export default Title;
