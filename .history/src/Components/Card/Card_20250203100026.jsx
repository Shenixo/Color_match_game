import './Card.css';
const Card = () => {
    const randomNum = Math.floor(Math.random() * 6)
    const cardArr = Array(6).from({length: 6})

    console.log(randomNum)
    return (
        <div className="card">
            
        </div>
    );
};
const fineColor
    "#FF6F61", 
    "#50C878", 
    "#B2A4D4", // Soft Lavender
    "#FFD700", // Golden Yellow
    "#FF69B4", // Blush Pink
  ];
export default Card;