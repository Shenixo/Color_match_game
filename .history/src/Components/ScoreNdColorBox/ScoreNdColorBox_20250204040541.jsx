import sadEmoji from "../../assets/emoji.png"
import "./ScoreNdColorBox.css";
const ScoreNdColorBox = () => {
 
  return (
    <div className="score_nd_color_box">
      <div className="target_card">
        <p>Hint</p>tvtvttvvv   
        <img style={{marginLeft: "-15px"}} src={sadEmoji} width={30} alt="Sad emoji" />
        {/* <ChosenColor/> */}
      </div>
    </div>
  );
};

export default ScoreNdColorBox;


