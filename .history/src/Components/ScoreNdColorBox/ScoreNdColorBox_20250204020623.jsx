import ChosenColor from "../ChosenColorDisplay/ChosenColorDisplay"

import "./ScoreNdColorBox.css";
const ScoreNdColorBox = () => {
 
  return (
    <div className="score_nd_color_box">
      <div className="target_card">
        <p>Hint😒</p>
        <ChosenColor/>
      </div>
    </div>
  );
};

export default ScoreNdColorBox;


