import { useEffect, useState } from "react";
// import { handleRandomCard } from "../../Components/Card/Card";
import "./ScoreNdColorBox.css";
const ScoreNdColorBox = () => {
  // const [randomCard, setRandomCard] = useState(null);
  // console.log("random carddd", randomCard);
  // useEffect(() => setRandomCard(handleRandomCard()), []);
  return (
    <div className="score_nd_color_box">
      <div className="target_card">
        <p>Target Color:</p>{" "}
        {/* <div className="random_card" style={{ background: randomCard }} />{" "} */}
      </div>
    </div>
  );
};

export default ScoreNdColorBox;

/*Nahhh this is worst the cards first appears first without color then i think a card is first chosen in this state without colors then after the colors suddenly appears and then another card is being chosen how ami supposed to work with this The flow should be that one random card gets selected it shuffles and i have to click on the card that was chosen to add to my score and if i fail to do this my score gets deducted this shoud be the flow */
