import Tab from "../../Components/Tab/Tab";
import Title from "../../Components/Title/Title";
import { GameTheme, TabClick } from "../../Components/Sound/Sound";
const handleMusicTabClick = () => {
  GameTheme()
  TabClick()
}
const [is]
const Sound = () => {
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
