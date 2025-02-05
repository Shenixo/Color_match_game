import { useState } from "react";
import sadEmoji from "../../assets/emoji.png"
import "./ScoreNdColorBox.css";
const ScoreNdColorBox = () => {
  const [hint, setHint] = useState(false)
  const handleHint = () => {
    const newHintSta
  }
  
  return (
    <div className="score_nd_color_box">
      <div onClick={handleHint} className="target_card">
        <p>Hint</p>  
        <img style={{marginLeft: "-15px"}} src={sadEmoji} width={30} alt="Sad emoji" />
        {/* <ChosenColor/> */}
      </div>
    </div>
  );
};

export default ScoreNdColorBox;


