import ChosenColor from "../ChosenColorDisplay/ChosenColorDisplay"
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import "./ScoreNdColorBox.css";
const ScoreNdColorBox = () => {
 
  return (
    <div className="score_nd_color_box">
      <div className="target_card">
        <p>Hint:</p>
        <ChosenColor/>
      </div>
    </div>
  );
};

export default ScoreNdColorBox;


