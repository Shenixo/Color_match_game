import { useState } from "react";
import sadEmoji from "../../assets/emoji.png"
import "./ScoreNdColorBox.css";
const ScoreNdColorBox = () => {
  const [hint, setHint] = useState(false)
  const handleHint = () => {
    setHint(pv => !pv)
  }
  return (
    <div className="score_nd_color_box">
      <div className="target_card">
        <p>Hint</p>  
        <img style={{marginLeft: "-15px"}} src={sadEmoji} width={30} alt="Sad emoji" />
        {/* <ChosenColor/> */}
      </div>
    </div>
  );
};

export default ScoreNdColorBox;


