import "./Tab.css"
import PropTypes from 'prop-types';
const Tab = ({content}) => {
  return (
    <div className="tab">
      {content}
    </div>
  )
}
Tab.propTypes = {
  content: PropTypes.node.isRequired,
};

export default Tab
export default Tab
