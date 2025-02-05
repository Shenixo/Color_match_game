import Tab from "../../Components/Tab/Tab";
import Title from "../../Components/Title/Title";
import {flag} from "../../assets/-flag (1).png"
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <Title />
        <Tab content="Start Game" image={flag} />
        <Tab content="Sound" />
        <Tab content="Rules" />
      </div>
    </div>
  );
};

export default Home;
