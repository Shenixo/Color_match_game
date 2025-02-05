import "./Title.css"
import brain from "../../assets/brain.png"
import PropTypes from 'prop-types';

const Title = ({content}) => {
  return (
    <div className="title">
          <h1>{ content}</h1>
          <img src={brain} alt="Brain image" width={80} />
    </div>
  )
Title.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Title

