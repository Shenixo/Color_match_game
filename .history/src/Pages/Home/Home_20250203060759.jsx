import Tab from "../../Components/Tab/Tab";
import Title from "../../Components/Title/Title";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Title content="Color Match Game" />
        <Tab content="Start Game"  />
        <Tab content="Reset" />
        <Tab content="Sound" />
        <Tab content="Rules" path="/rules" />
      </div>
    </div>
  );
};

export default Home;
