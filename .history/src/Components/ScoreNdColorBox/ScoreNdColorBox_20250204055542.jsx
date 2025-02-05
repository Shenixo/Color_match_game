import { useState } from "react";
import sadEmoji from "../../assets/emoji.png"
import "./ScoreNdColorBox.css";
import BlurOnIcon from '@mui/icons-material/BlurOn';
const ScoreNdColorBox = () => {
  const [hint, setHint] = useState(false)
  const handleHint = () => {
    const newHintState = !hint
    setHint(newHintState)
    document.dispatchEvent(new CustomEvent("hintUpdated", {detail: newHintState}))
  }
  
  return (
    <div className="score_nd_color_box">
      <div onClick={handleHint} className="hint">
        <p>Hint</p>  
        <BlurOnIcon style={{marginLeft: "-15px", color:"#B2A4D4" }}/>
        {/* <img style={{marginLeft: "-15px"}} src={sadEmoji} width={30} alt="Sad emoji" /> */}
        {/* <ChosenColor/> */}
      </div>
    </div>
  );
};

export default ScoreNdColorBox;


