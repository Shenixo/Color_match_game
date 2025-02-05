import { useEffect, useState } from "react";
import { handleRandomCard } from "../../Components/Card/Card";
import "./ScoreNdColorBox.css"
const ScoreNdColorBox = () => {
    const [randomCard, setRandomCard] = useState(null);
    console.log("random carddd", randomCard)
  useEffect(() => setRandomCard(handleRandomCard()), []);
    return <div className="score_nd_color_box">
      <div className="">Target Color: <div className="random_card" style={{background: randomCard }}/> </div>
  </div>;
};

export default ScoreNdColorBox;
