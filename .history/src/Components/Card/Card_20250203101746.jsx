import "./Card.css";
const Card = () => {
  const randomNum = Math.floor(Math.random() * 6);
  const cardArr = Array.from({ length: 6 })
console.log(cardArr)
//   console.log(randomNum);
  return (
    <div className="card">
      {cardArr.map((_, idx) => (
        <div style={{ background: fineColors[fineColors] }} key={idx} />
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
export default Card;
