import "./Card.css";
const randomNum = Math.floor(Math.random() * 6);
const handleRandomCard = () => fineColors[randomNum];

const cardRan = handleRandomCard()
const Card = () => {
  const cardArr = Array.from({ length: 6 });
  return (
    <div className="card">
      {cardArr.map((_, idx) => (
        <div style={{ background: fineColors[idx] }} key={idx} />
      ))}
    </div>
  );
};
const fineColors = [
  "#2E86AB",
  "#FF6F61",
  "#50C878",
  "#B2A4D4",
  "#FFD700",
  "#FF69B4",
];
export { Card, handleRandomCard };
