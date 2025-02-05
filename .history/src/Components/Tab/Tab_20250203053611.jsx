import "./Tab.css"
import PropTypes from 'prop-types';
const Tab = ({content, image}) => {
  return (
    <div className="tab">
          <h1>{content}</h1>
          <img src={image} alt="Button image" width={50}/>
    </div>
  )
}
Tab.propTypes = {
  content: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
};

export default Tab;
