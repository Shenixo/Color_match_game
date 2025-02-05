import "./Card.css";
const randomNum = Math.floor(Math.random() * 6);
const handleRandomCard = () => fineColors[randomNum];

const cardRan = handleRandomCard()
const Card = () => {
  const cardArr = Array.from({ length: 6 });
  return (
    <div className="card">
      {cardArr.map((_, idx) => (
        <div className={cardRan === idx ? "chosen_card" : ""} style={{ background: fineColors[idx] }} key={idx} />
      ))}
    </div>
  );
};

