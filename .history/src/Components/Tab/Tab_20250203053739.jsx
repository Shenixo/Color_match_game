import "./Tab.css"
import PropTypes from 'prop-types';
const Tab = ({content, Icon}) => {
  return (
    <div className="tab">
          <h1>{content}</h1>
          <Icon/>
    </div>
  )
}
Tab.propTypes = {
  content: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
};

export default Tab;
