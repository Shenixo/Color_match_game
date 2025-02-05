import { useState } from "react";
import "./Card.css";
const fineColors = [
  "#2E86AB",
  "#FF6F61",
  "#50C878",
  "#B2A4D4",
  "#FFD700",
  "#FF69B4",
];
const randomNum = Math.floor(Math.random() * 6);
const handleRandomCard = () => fineColors[randomNum];

const cardRan = handleRandomCard();
console.log("cardRan", cardRan);
const Card = () => {
  const [colors, setColors] = useState([...fineColors])
  const [chosenColor, setChosen]
  const cardArr = Array.from({ length: 6 });
  return (
    <div className="card">
      {cardArr.map((_, idx) => (
        <div
          className={cardRan === fineColors[idx] ? "chosen_card" : ""}
          style={{ background: fineColors[idx] }}
          key={idx}
        />
      ))}
    </div>
  );
};
export { Card, handleRandomCard };
