import Tab from "../../Components/Tab/Tab";
import Title from "../../Components/Title/Title";
import { GameTheme, TabClick } from "../../Components/Sound/Sound";
import { useState } from "react";
const handleMusicTabClick = () => {
  GameTheme()
  TabClick()
}
const Sound = () => {
  const [isSoundActive, setIsSoundActive] = useState(false)
  const handleClickSound = () => {
    setIsSoundActive(pv => !pv)
  }
  useState()
  return (
    <div className="sound">
      <div className="container">
        <Title content="Sound" />
        <Tab content="Music" onClickTab={handleMusicTabClick} />
        <Tab content="Sound" onClickTab={TabClick} />
      </div>
    </div>
  );
};

export default Sound;
