import './Card.css';
const Card = () => {
    const randomNum = Math.floor(Math.random() * 6)
    const cardArr = Array(6).from()

    console.log(randomNum)
    return (
        <div className="card">
            
        </div>
    );
};

export default Card;