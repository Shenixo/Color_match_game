import Tab from "../../Components/Tab/Tab";
import Title from "../../Components/Title/Title";
import flag from "../../assets/checkered-flag.png"
import FlagTwoToneIcon from '@mui/icons-material/FlagTwoTone';
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <Title />
        <Tab content="Start Game" icon={<FlagTwoToneIcon/>} />
        <Tab content="Sound" />
        <Tab content="Rules" />
      </div>
    </div>
  );
};

export default Home;
