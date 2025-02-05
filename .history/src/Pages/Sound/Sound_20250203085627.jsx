import Tab from "../../Components/Tab/Tab";
import Title from "../../Components/Title/Title";
import { GameTheme, TapClick } from "../../Components/Sound/Sound";

const Sound = () => {
  return (
    <div className="sound">
      <div className="container">
        <Title content="Sound" />
        <Tab content="Music" onClickTab={GameTheme} />
        <Tab content="Sound" onClickTab={(TapClick) => {}} />
      </div>
    </div>
  );
};

export default Sound;
