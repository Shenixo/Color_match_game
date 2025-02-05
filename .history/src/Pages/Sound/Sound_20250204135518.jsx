import Tab from "../../Components/Tab/Tab";
import Title from "../../Components/Title/Title";
import { GameTheme, TabClick, isSoundPlaying, StopTabClick } from "../../Components/Sound/Sound";

const Sound = () => {

  const handleClickSound = () => {
    if (isSoundPlaying) StopTabClick()
      TabClick()
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
        <Tab content="Sound" onClickTab={handleClickSound} />
      </div>
    </div>
  );
};

export default Sound;
