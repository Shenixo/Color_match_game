import "./Tab.css"
import PropTypes from 'prop-types';
const Tab = ({content, image}) => {
  return (
    <div className="tab">
          <h1>{content}</h1>
    </div>
  )
}
Tab.propTypes = {
  content: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
};

export default Tab;
