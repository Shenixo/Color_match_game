import Tab from "../../Components/Tab/Tab";
import Title from "../../Components/Title/Title";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Title content="Color Match" onClickTab={TabClick} />
        <Tab content="Start Game" onClickTab={TabClick}/>
        <Tab content="Reset" onClickTab={TabClick} />
        <Tab content="Sound" path="/sound" onClickTab={TabClick} />
        <Tab content="Rules" path="/rules" onClickTab={TabClick} />
      </div>
    </div>
  );
};

export default Home;
