import Tab from "../../Components/Tab/Tab";
import Title from "../../Components/Title/Title";
import game_sound from "../../"
const Sound = () => {
  return (
    <div className="sound">
      <div className="container">
        <Title content="Sound" />
        <Tab content="Music" />
        <Tab content="Sound" />
      </div>
    </div>
  );
};

export default Sound;
