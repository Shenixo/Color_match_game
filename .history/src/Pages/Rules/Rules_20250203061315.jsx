import Title from "../../Components/Title/Title";
import "./Rules.css"
const Rules = () => {
  return (
    <div>
      <div className="container">
        <Title content="Game Rules" />

        <ul className="rules">
          {gameRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rules;
const gameRules = [
  "The game shows a color in the colorBox.",
  "Six color buttons appear below the colorBox.",
  "Click the button that you think matches the color in the colorBox.",
  "If correct → You get +1 point and see 'Correct!' 🎉",
  "If wrong → You see 'Try Again!' ❌",
  "Click 'New Game' to start a fresh round with a new color.",
];
