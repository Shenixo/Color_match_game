import Title from "../../Components/Title/Title";
import "./Rules.css";
const Rules = () => {
  return (
    <div>
      <div className="container">
        <Title content="Game Rules" />

        <div data-testid="gameInstructions" className="rules">
          <p>
            The goal of the game is to identify and select the card that was
            initially chosen based on its color. When the game starts, a random
            card is chosen, and then all the cards shuffle. Your task is to find
            the original card by its color. If you select the correct card, you
            earn +1 point, but if you choose the wrong one, you lose -1 point.
            There is also a hint feature that can help you. When you click on
            the hint button, a bulb appears. Clicking on the hint will reveal
            the color of the chosen card, making it easier to find. Enjoy the
            game!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;

