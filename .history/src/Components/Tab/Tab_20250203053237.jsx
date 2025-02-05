import "./Tab.css"
import PropTypes from 'prop-types';
const Tab = ({content, image}) => {
  return (
    <div className="tab">
          <h1>{content}</h1>
          <img src={image} alt="Button image" />
    </div>
  )
}
Tab.propTypes = {
  content: PropTypes.node.isRequired,
};

export default Tab;
