import { useState } from "react";
import Tab from "../../Components/Tab/Tab";
import Title from "../../Components/Title/Title";
import { GameTheme, TabClick, StopTabClick } from "../../Components/Sound/Sound";

const Sound = () => {
  const [isSoundActive, setIsSoundActive] = useState(true);

  const handleClickSound = () => {
    if (isSoundActive) {
      StopTabClick();
    } else {
      TabClick();
    }
    setIsSoundActive((prev) => !prev); 
  };

  const handleMusicTabClick = () => {
    GameTheme();
    TabClick();
  };

  return (
    <div className="sound">
      <div className="container">
        <Title content="Sound" />
        <Tab content="Music" onClickTab={handleMusicTabClick} />
        <Tab content={`Sound:${isSoundActive ? "ON" : "OFF"}`} onClickTab={handleClickSound} />
      </div>
    </div>
  );
};

export default Sound;
