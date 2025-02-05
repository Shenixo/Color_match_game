import Tab from "../../Components/Tab/Tab";
import Title from "../../Components/Title/Title";
import { GameTheme, TabClick } from "../../Components/Sound/Sound";

const Sound = () => {
  // const [isSoundActive, setIsSoundActive] = useState(true);

  // const handleClicks = () => {
  //   setIsSoundActive((prev) => !prev);
  // };

  // useEffect(() => {
  //   if (isSoundActive) {
  //     TabClick();
  //   } else {
  //     StopTabClick();
  //   }
  // }, [isSoundActive]);

  const handleMusicTabClick = () => {
    GameTheme();
    TabClick();
  };

  return (
    <div className="sound">
      <div className="container">
        <Title content="Sound" />
        <Tab content="Music" onClickTab={handleMusicTabClick} />
        {/* <Tab content={`Sound:${isSoundActive ? "ON" : "OFF"}`} onClickTab={handleClicks} /> */}
      </div>
    </div>
  );
};

export default Sound;
