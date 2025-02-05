import Tab from "../../Components/Tab/Tab";
import Title from "../../Components/Title/Title";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
              <Title />
              <Tab/>
      </div>
    </div>
  );
};

export default Home;
