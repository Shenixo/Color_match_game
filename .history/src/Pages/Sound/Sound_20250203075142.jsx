import Tab from "../../Components/Tab/Tab";
import Title from "../../Components/Title/Title";
import { GameTheme } from "../../Components/Sound/Sound";
const Sound = () => {
  return (
    <div className="sound">
      <div className="container">
        <Title content="Sound" />
        <Tab content="Music" onClickTab={} />
        <Tab content="Sound" />
      </div>
    </div>
  );
};

export default Sound;
