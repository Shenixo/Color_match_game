import Tab from "../../Components/Tab/Tab";
import Title from "../../Components/Title/Title";
import { GameTheme, TabClick } from "../../Components/Sound/Sound";

const Sound = () => {
  return (
    <div className="sound">
      <div className="container">
        <Title content="Sound" />
        {/* Pass the correct function as onClickTab */}
        <Tab content="Music" onClickTab={GameTheme} />
        <Tab content="Sound" onClickTab={TabClick} />
      </div>
    </div>
  );
};

export default Sound;
