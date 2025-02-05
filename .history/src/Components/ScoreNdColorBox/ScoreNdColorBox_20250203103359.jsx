import { useEffect, useState } from "react";
import { handleRandomCard } from "../../Components/Card/Card";
const ScoreNdColorBox = () => {
  const [randomCard, setRandomCard] = useState(null);
  useEffect(() => setRandomCard(handleRandomCard()), []);
    return <div className="score_nd_color_box">
      <div>Target Color:  </div>
  </div>;
};

export default ScoreNdColorBox;
