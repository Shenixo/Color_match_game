import ChosenColor from "../ChosenColorDisplay/ChosenColorDisplay"
import sadEmoji from "../../assets/emoji.png"
import "./ScoreNdColorBox.css";
const ScoreNdColorBox = () => {
 
  return (
    <div className="score_nd_color_box">
      <div className="target_card">
        <p>Hint</p>
        <img style={{marginLeft: "-20"}} src={sadEmoji} width={30} alt="Sad emoji" />
        {/* <ChosenColor/> */}
      </div>
    </div>
  );
};

export default ScoreNdColorBox;


