import Tab from "../../Components/Tab/Tab";
import Title from "../../Components/Title/Title";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
              <Title />
              <Tab content="Start Game"/>
              <Tab content="Rules"/>
              <Tab content="Sound"/>
      </div>
    </div>
  );
};

export default Home;
