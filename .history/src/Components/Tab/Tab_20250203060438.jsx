import { Link } from "react-router-dom";
import "./Tab.css";
import PropTypes from "prop-types";
const Tab = ({ content, path = "" }) => {
  return (
    <Link to={path} style={}>
      <div className="tab">
        <h1>{content}</h1>
      </div>
     </Link>
  );
};
Tab.propTypes = {
  content: PropTypes.node.isRequired,
  Icon: PropTypes.string.isRequired,
  path: PropTypes.string,
};

export default Tab;
