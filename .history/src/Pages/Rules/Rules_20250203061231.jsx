import Title from "../../Components/Title/Title";

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
  " 1. The game shows a color in the colorBox.",
  " 2. Six color buttons appear below the colorBox.",
  " 3. Click the button that you think matches the color in the colorBox.",
  " 4. If correct → You get +1 point and see 'Correct!' 🎉",
  " 5. If wrong → You see 'Try Again!' ❌",
  " 6. Click 'New Game' to start a fresh round with a new color.",
];
