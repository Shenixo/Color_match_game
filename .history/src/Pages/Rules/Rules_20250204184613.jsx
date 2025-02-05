import Title from "../../Components/Title/Title";
import "./Rules.css";
const Rules = () => {
  return (
    <div>
      <div className="container">
        <Title content="Game Rules" />

        <div data-testid="gameInstructions" className="rules">
          <p>
            The objective of the game is to identify and select the originally
            chosen card based on its color. At the start, a random card is
            selected, after which all cards shuffle. Your task is to correctly
            pick the original card. Each correct selection earns you +1 point,
            while an incorrect choice results in a -1 point deduction.</p>
             To assist
            you, a hint feature is available. Clicking on the hint button
            reveals a bulb, which, when clicked, displays the color of the
            chosen card, helping you make a more informed decision. For a better
            experience, enable music to enhance the game's effect and make it
            more engaging. Additionally, you can navigate back to the home page
            at any time by clicking on the brain icon at the top. Enjoy the
            game!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
