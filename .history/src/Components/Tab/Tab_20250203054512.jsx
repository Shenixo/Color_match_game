import "./Tab.css";
import PropTypes from "prop-types";
const Tab = ({ content, icon }) => {
  return (
    <div className="tab">
      <h1>{content}</h1>
      <icon />
    </div>
  );
};
Tab.propTypes = {
  content: PropTypes.node.isRequired,
  Icon: PropTypes.string.isRequired,
};

export default Tab;
