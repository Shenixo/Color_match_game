import Tab from "../../Components/Tab/Tab";
import Title from "../../Components/Title/Title";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <Title />
        <Tab content="Start Game"  />
        <Tab content="Reset" />
        <Tab content="Sound" />
        <Tab content="Rules" />
      </div>
    </div>
  );
};

export default Home;
